import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String, //convert image into string using tha react-base-64
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// convert schema to model
// module.exports = mongoose.model("PostMessage", postSchema);

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
