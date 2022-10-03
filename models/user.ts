import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: Number,
  role: String
});

const User = model("User", userSchema);
export default User;
