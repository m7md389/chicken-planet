import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eggSchema = new Schema({
  size: String,
  color: String,
  quantity_per_year: Number,
  price: Number,
  eggs_in_incubator: { count: Number, hatch_date: Date },
  images: [String]
});

const Egg = mongoose.model("Egg", eggSchema);
export default Egg;
