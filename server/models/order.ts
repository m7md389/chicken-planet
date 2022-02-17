import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: [{ item: String, quantity: Number }],
  price: Number,
  delivery: Boolean,
  address_id: { type: Schema.Types.ObjectId, ref: "Address" }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
