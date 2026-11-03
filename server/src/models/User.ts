import { model, Schema, Types, type HydratedDocument } from "mongoose";

export type UserRole = "member" | "admin";

export interface UserFields {
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  bio: string;
  avatarUrl: string;
  bookmarks: Types.ObjectId[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<UserFields>;

const userSchema = new Schema<UserFields>(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ["member", "admin"], default: "member", immutable: true },
    bio: { type: String, default: "", maxlength: 500 },
    avatarUrl: { type: String, default: "", maxlength: 1000 },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false },
);

userSchema.index({ email: 1 }, { unique: true });

export const User = model<UserFields>("User", userSchema);
