import { model, Schema, type Types } from "mongoose";

export type PostStatus = "draft" | "published";

export interface PostFields {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  status: PostStatus;
  readTime: number;
  views: number;
  author: Types.ObjectId;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<PostFields>(
  {
    title: { type: String, required: true, trim: true, maxlength: 180 },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 200 },
    excerpt: { type: String, required: true, trim: true, maxlength: 320 },
    content: { type: String, required: true, maxlength: 50000 },
    category: { type: String, default: "Engineering", trim: true, maxlength: 60 },
    tags: [{ type: String, trim: true, maxlength: 32 }],
    coverImage: { type: String, default: "", maxlength: 1000 },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    readTime: { type: Number, default: 1, min: 1, max: 120 },
    views: { type: Number, default: 0, min: 0 },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true, versionKey: false },
);

postSchema.index({ status: 1, publishedAt: -1 });
postSchema.index({ tags: 1 });
postSchema.index({ title: "text", excerpt: "text", content: "text" });

export const Post = model<PostFields>("Post", postSchema);
