import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "admin" | "organizer" | "speaker" | "attendee";
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["admin", "organizer", "speaker", "attendee"], default: "attendee" }
}, { timestamps: true });

const User = mongoose.model<IUser>("User", userSchema);

export default User;
