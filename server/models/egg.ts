import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eggSchema = new Schema({
  chicken_id: { type: Schema.Types.ObjectId, ref: "Chicken" },
  size: Number,
  color: String,
  quantity_per_year: Number,
  price: Number,
  eggs_in_incubator: { count: Number, hatch_data: Date },
  images: [String]
});

const Egg = mongoose.model("Egg", eggSchema);
export default Egg;
