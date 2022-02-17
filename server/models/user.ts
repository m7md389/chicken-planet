import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: Number,
  role: String
});

const User = mongoose.model("User", userSchema);
export default User;
