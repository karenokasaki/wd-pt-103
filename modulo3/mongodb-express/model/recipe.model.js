import { Schema, model } from "mongoose";

const recipeSchema = new Schema(
   {
      // TODO: write the schema
      title: { type: String, required: true, unique: true },
      level: {
         type: String,
         enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
      },
      ingredients: [{ type: String }],
      cuisine: { type: String, required: true },
      dishType: {
         type: String,
         enum: [
            "breakfast",
            "main_course",
            "soup",
            "snack",
            "drink",
            "dessert",
            "other",
         ],
      },
      image: {
         type: String,
         default: "https://images.media-allrecipes.com/images/75131.jpg",
      },
      duration: { type: Number, min: 0 },
      creator: { type: Schema.Types.ObjectId, ref: "User" },
      created: { type: Date, default: Date.now },
   },
   { timestamps: true }
);

export default model("Recipe", recipeSchema);
// creator : dausahsha90
