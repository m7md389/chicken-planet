import mongoose from "mongoose";
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  house_number: Number,
  street: String,
  city: String,
  zip_code: Number,
  details: String
});

const Address = mongoose.model("Address", addressSchema);
export default Address;
