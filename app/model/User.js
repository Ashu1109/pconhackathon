import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: [8, "Password is short"],
    select: false,
  },
});

const User = mongoose.models.users || mongoose.model("users", schema);
export default User;
