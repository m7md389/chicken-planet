import mongoose from "mongoose";
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  order_id: { type: Schema.Types.ObjectId, ref: "Order" },
  type: String,
  date: Date
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
