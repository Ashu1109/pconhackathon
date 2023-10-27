import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.models.notes || mongoose.model("notes", schema);
export default Note;
