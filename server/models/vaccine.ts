import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
  name: String,
  vaccine_period: Number,
  amount: Number,
  price: Number,
  description: String,
  images: [String]
});

const Vaccine = mongoose.model("Vaccine", vaccineSchema);
export default Vaccine;
