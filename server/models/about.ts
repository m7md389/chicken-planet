import mongoose from "mongoose";
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  images: [String],
  details: String,
  contact_info: {}
  // not completed
});

const About = mongoose.model("User", aboutSchema);
export default About;
