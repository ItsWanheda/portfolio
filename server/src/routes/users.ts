import { Router } from "express";
import { Types } from "mongoose";
import { z } from "zod";
import { requireAuth, requireCsrf } from "../middleware.js";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";

const router = Router();
router.use(requireAuth);

router.get("/me", async (request, response) => {
  const user = request.currentUser!;
  response.status(200).json({
    user: {
      id: String(user._id),
      name: user.name,
      email: user.email,
      role: user.role,
      bio: user.bio,
      avatarUrl: user.avatarUrl,
      createdAt: user.createdAt,
    },
  });
});

router.patch("/me", requireCsrf, async (request, response) => {
  const schema = z.object({
    name: z.string().trim().min(2).max(80).optional(),
    bio: z.string().trim().max(500).optional(),
    avatarUrl: z.string().trim().url().max(1000).or(z.literal("")).optional(),
  }).refine((value) => Object.keys(value).length > 0);
  const parsed = schema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: "Profile information is invalid." });
    return;
  }

  const user = await User.findByIdAndUpdate(request.auth!.userId, { $set: parsed.data }, { new: true, runValidators: true });
  if (!user) {
    response.status(404).json({ error: "Account not found." });
    return;
  }
  response.status(200).json({
    user: { id: String(user._id), name: user.name, email: user.email, role: user.role, bio: user.bio, avatarUrl: user.avatarUrl },
  });
});

router.get("/me/bookmarks", async (request, response) => {
  const user = await User.findById(request.auth!.userId).select("bookmarks");
  const posts = await Post.find({ _id: { $in: user?.bookmarks || [] }, status: "published" }).select("-content").sort({ publishedAt: -1 }).lean();
  response.status(200).json({ posts });
});

router.put("/me/bookmarks/:postId", requireCsrf, async (request, response) => {
  const rawPostId = request.params.postId;
  if (typeof rawPostId !== "string" || !Types.ObjectId.isValid(rawPostId)) {
    response.status(400).json({ error: "Invalid article identifier." });
    return;
  }
  const postId = new Types.ObjectId(rawPostId);
  const post = await Post.findOne({ _id: postId, status: "published" }).select("_id");
  if (!post) {
    response.status(404).json({ error: "Published article not found." });
    return;
  }
  await User.updateOne({ _id: request.auth!.userId }, { $addToSet: { bookmarks: post._id } });
  response.status(200).json({ success: true });
});

router.delete("/me/bookmarks/:postId", requireCsrf, async (request, response) => {
  const rawPostId = request.params.postId;
  if (typeof rawPostId !== "string" || !Types.ObjectId.isValid(rawPostId)) {
    response.status(400).json({ error: "Invalid article identifier." });
    return;
  }
  await User.updateOne(
    { _id: request.auth!.userId },
    { $pull: { bookmarks: new Types.ObjectId(rawPostId) } },
  );
  response.status(200).json({ success: true });
});

export default router;
