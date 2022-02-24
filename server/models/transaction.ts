import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  type: String,
  date: Date,
  order_id: { type: Schema.Types.ObjectId, ref: "Order" }
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
