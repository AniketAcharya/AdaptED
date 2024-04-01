import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: String },
  edu: { type: String },
  exp: { type: String },
  interest: { type: String },
  rating: { type: Number },
  consume: { type: String },
  time: { type: String },
  duration: { type: String },
  freq: { type: Number },
  device: { type: String },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
