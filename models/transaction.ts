import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  type: String,
  date: Date,
  order_id: { type: Schema.Types.ObjectId, ref: "Order" }
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;
