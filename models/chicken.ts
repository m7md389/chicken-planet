import { Schema, model } from "mongoose";

const chickenSchema = new Schema({
  name: String,
  temperature: String,
  life_time: Number,
  weight: Number,
  color: String,
  sound: String,
  price: Number,
  quantity: Number,
  images: [String],
  description: String,
  origin: String,
  egg_id: { type: Schema.Types.ObjectId, ref: "Egg" },
  vaccine_id: [{ type: Schema.Types.ObjectId, ref: "Vaccine" }]
});

const Chicken = model("Chicken", chickenSchema);
export default Chicken;
