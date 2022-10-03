import { Schema, model } from "mongoose";

const updateDataRequestSchema = new Schema({
  chicken: {},
  status: String,
  chicken_id: { type: Schema.Types.ObjectId, ref: "Chicken" }
});

const UpdateDataRequest = model("UpdateDataRequest", updateDataRequestSchema);
export default UpdateDataRequest;
