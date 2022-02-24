import mongoose from "mongoose";
const Schema = mongoose.Schema;

const updateDataRequestSchema = new Schema({
  chicken: {},
  status: String,
  chicken_id: { type: Schema.Types.ObjectId, ref: "Chicken" }
});

const UpdateDataRequest = mongoose.model(
  "UpdateDataRequest",
  updateDataRequestSchema
);
export default UpdateDataRequest;
