import { Router } from "express";
import { Post } from "../models/Post.js";

const router = Router();

router.get("/", async (request, response) => {
  const page = Math.max(1, Number.parseInt(String(request.query.page || "1"), 10) || 1);
  const limit = Math.min(30, Math.max(1, Number.parseInt(String(request.query.limit || "12"), 10) || 12));
  const category = typeof request.query.category === "string" ? request.query.category.trim() : "";
  const search = typeof request.query.q === "string" ? request.query.q.trim().slice(0, 80) : "";
  const filter = {
    status: "published" as const,
    ...(category ? { category } : {}),
    ...(search ? { $text: { $search: search } } : {}),
  };

  const [posts, total] = await Promise.all([
    Post.find(filter).select("-content").sort({ publishedAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    Post.countDocuments(filter),
  ]);

  response.status(200).json({ posts, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

router.get("/meta/:slug", async (request, response) => {
  const slug = typeof request.params.slug === "string" ? request.params.slug : "";
  if (!slug) {
    response.status(400).json({ error: "Invalid article URL." });
    return;
  }
  const post = await Post.findOne({ slug, status: "published" })
    .select("title excerpt category tags readTime publishedAt")
    .lean();
  if (!post) {
    response.status(404).json({ error: "This article could not be found." });
    return;
  }
  response.status(200).json({ post });
});

router.get("/:slug", async (request, response) => {
  const slug = typeof request.params.slug === "string" ? request.params.slug : "";
  if (!slug) {
    response.status(400).json({ error: "Invalid article URL." });
    return;
  }
  const post = await Post.findOne({ slug, status: "published" }).lean();
  if (!post) {
    response.status(404).json({ error: "This article could not be found." });
    return;
  }
  await Post.updateOne({ _id: post._id }, { $inc: { views: 1 } });
  response.status(200).json({ post });
});

export default router;
