import { Router } from "express";
import { Types } from "mongoose";
import { z } from "zod";
import { requireAdmin, requireAuth, requireCsrf } from "../middleware.js";
import { Post } from "../models/Post.js";

const router = Router();
router.use(requireAuth, requireAdmin);
router.use((request, response, next) => {
  if (["GET", "HEAD", "OPTIONS"].includes(request.method)) {
    next();
    return;
  }
  requireCsrf(request, response, next);
});

const postSchema = z.object({
  title: z.string().trim().min(3).max(180),
  slug: z.string().trim().max(200).optional(),
  excerpt: z.string().trim().min(10).max(320),
  content: z.string().min(20).max(50000),
  category: z.string().trim().min(2).max(60).default("Engineering"),
  tags: z.array(z.string().trim().min(1).max(32)).max(12).default([]),
  coverImage: z.string().trim().max(1000).default(""),
  status: z.enum(["draft", "published"]).default("draft"),
});

function slugify(value: string): string {
  return value.normalize("NFKD").toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 190);
}

router.get("/posts", async (request, response) => {
  const status = request.query.status === "draft" ? "draft" : request.query.status === "published" ? "published" : undefined;
  const filter = status ? { status } : {};
  const posts = await Post.find(filter).select("-content").sort({ updatedAt: -1 }).limit(100).lean();
  response.status(200).json({ posts });
});

router.get("/posts/:id", async (request, response) => {
  if (!Types.ObjectId.isValid(request.params.id)) {
    response.status(400).json({ error: "Invalid article identifier." });
    return;
  }
  const post = await Post.findById(request.params.id).lean();
  if (!post) {
    response.status(404).json({ error: "Article not found." });
    return;
  }
  response.status(200).json({ post });
});

router.post("/posts", async (request, response) => {
  const parsed = postSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "The article data is incomplete or invalid." });
    return;
  }

  const slug = slugify(parsed.data.slug || parsed.data.title);
  if (!slug) {
    response.status(400).json({ error: "A valid article title is required to create its URL." });
    return;
  }
  if (await Post.exists({ slug })) {
    response.status(409).json({ error: "An article with this URL already exists. Choose a different slug." });
    return;
  }

  const post = await Post.create({
    ...parsed.data,
    slug,
    author: request.currentUser!._id,
    publishedAt: parsed.data.status === "published" ? new Date() : null,
    readTime: Math.max(1, Math.ceil(parsed.data.content.trim().split(/\s+/).length / 220)),
  });
  response.status(201).json({ post });
});

router.patch("/posts/:id", async (request, response) => {
  if (!Types.ObjectId.isValid(request.params.id)) {
    response.status(400).json({ error: "Invalid article identifier." });
    return;
  }
  const parsed = postSchema.partial().safeParse(request.body);
  if (!parsed.success || Object.keys(parsed.data || {}).length === 0) {
    response.status(400).json({ error: "Provide at least one valid article field to update." });
    return;
  }

  const post = await Post.findById(request.params.id);
  if (!post) {
    response.status(404).json({ error: "Article not found." });
    return;
  }

  const update = parsed.data;
  if (update.title || update.slug) {
    const candidate = slugify(update.slug || update.title || post.title);
    const collision = await Post.exists({ slug: candidate, _id: { $ne: post._id } });
    if (collision) {
      response.status(409).json({ error: "That article URL is already in use." });
      return;
    }
    post.slug = candidate;
  }

  if (update.title !== undefined) post.title = update.title;
  if (update.excerpt !== undefined) post.excerpt = update.excerpt;
  if (update.content !== undefined) {
    post.content = update.content;
    post.readTime = Math.max(1, Math.ceil(update.content.trim().split(/\s+/).length / 220));
  }
  if (update.category !== undefined) post.category = update.category;
  if (update.tags !== undefined) post.tags = update.tags;
  if (update.coverImage !== undefined) post.coverImage = update.coverImage;
  if (update.status !== undefined) {
    if (update.status === "published" && post.status !== "published") post.publishedAt = new Date();
    post.status = update.status;
    if (update.status === "draft") post.publishedAt = null;
  }

  await post.save();
  response.status(200).json({ post });
});

router.delete("/posts/:id", async (request, response) => {
  if (!Types.ObjectId.isValid(request.params.id)) {
    response.status(400).json({ error: "Invalid article identifier." });
    return;
  }
  const post = await Post.findByIdAndDelete(request.params.id);
  if (!post) {
    response.status(404).json({ error: "Article not found." });
    return;
  }
  response.status(200).json({ success: true });
});

export default router;
