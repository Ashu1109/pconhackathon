import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  title: String,
  description: String,
});

const Note = mongoose.models.notes || mongoose.model("notes", schema);
export default Note;
