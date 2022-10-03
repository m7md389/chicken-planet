import { Schema, model } from "mongoose";

const eggSchema = new Schema({
  size: String,
  color: String,
  quantity_per_year: Number,
  price: Number,
  eggs_in_incubator: { count: Number, hatch_date: Date },
  images: [String]
});

const Egg = model("Egg", eggSchema);
export default Egg;
