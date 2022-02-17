import mongoose from "mongoose";
const Schema = mongoose.Schema;

const updateDataRequestSchema = new Schema({
  chicken_id: { type: Schema.Types.ObjectId, ref: "Chicken" },
  chicken: {},
  status: String
});

const UpdateDataRequest = mongoose.model(
  "UpdateDataRequest",
  updateDataRequestSchema
);
export default UpdateDataRequest;
