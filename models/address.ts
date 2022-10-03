import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  house_number: Number,
  street: String,
  city: String,
  zip_code: Number,
  details: String
});

const Address = model("Address", addressSchema);
export default Address;
