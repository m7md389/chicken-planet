import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  items: [{ item: String, quantity: Number }],
  price: Number,
  delivery: Boolean,
  address_id: { type: Schema.Types.ObjectId, ref: "Address" }
});

const Order = model("Order", orderSchema);
export default Order;
