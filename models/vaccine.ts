import { Schema, model } from "mongoose";

const vaccineSchema = new Schema({
  name: String,
  vaccine_period: Number,
  amount: Number,
  price: Number,
  description: String,
  images: [String]
});

const Vaccine = model("Vaccine", vaccineSchema);
export default Vaccine;
