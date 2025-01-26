import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 2000,
  },
});

export default mongoose.model("Card", cardSchema);
