import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
   title: { type: String },
   note: {type: String},
   completed: { type: Boolean, default: false },
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

   





}, {
   timestamps: true
});

export default mongoose.model("Note", noteSchema)
