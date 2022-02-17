import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chickenSchema = new Schema({
  name: String,
  egg_id: { type: Schema.Types.ObjectId, ref: "Egg" },
  temperature: String,
  life_time: Number,
  weight: Number,
  color: String,
  sound: String,
  vaccine_id: { type: Schema.Types.ObjectId, ref: "Vaccine" },
  price: Number,
  quantity: Number,
  images: [String],
  description: String,
  origin: String
});

const Chicken = mongoose.model("Chicken", chickenSchema);
export default Chicken;
