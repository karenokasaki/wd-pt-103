import express from "express";
import RecipeModel from "../model/recipe.model.js";
import UserModel from "../model/user.model.js";

const recipeRoute = express.Router();

// CRUD -> Create, Read (All & Single/byId), Update, Delete
// /recipe/all
recipeRoute.get("/all", async (req, res) => {
   try {
      const allRecipes = await RecipeModel.find({})
         .sort({ duration: -1 })
         .select({ title: 1 });
      return res.status(200).json(allRecipes);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

recipeRoute.get("/get-recipe/:id", async (req, res) => {
   try {
      const id_recipe = req.params.id;

      const recipe = await RecipeModel.findById(id_recipe).populate("creator");

      return res.status(200).json(recipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

recipeRoute.post("/create-recipe/:id_user", async (req, res) => {
   try {
      //pegar o id do usuário que está criando a receita
      const id_user = req.params.id_user;

      //pegar os dados da receita
      const recipe = req.body;

      //criar uma nova receita
      const newRecipe = await RecipeModel.create({
         ...recipe,
         creator: id_user,
      });

      //adicionar a nova receita dentro da array de recipes do usuário
      const addRecipe = await UserModel.findByIdAndUpdate(id_user, {
         $push: { recipes: newRecipe._id },
      });

      return res.status(201).json(newRecipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//enviar vários receitas
recipeRoute.post("/create-many-recipes", async (req, res) => {
   try {
      const manyRecipe = await RecipeModel.insertMany(req.body);
      return res.status(201).json(manyRecipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

recipeRoute.put("/update/:id", async (req, res) => {
   try {
      const id_recipe = req.params.id;

      const data = req.body;

      const config = { new: true, runValidators: true };

      const recipe = await RecipeModel.findByIdAndUpdate(
         id_recipe,
         data,
         config
      );

      return res.status(200).json(recipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//soft delete
recipeRoute.delete("/delete-soft/:id", async (req, res) => {
   try {
      const id_recipe = req.params.id;
      const recipe = await RecipeModel.findByIdAndUpdate(
         id_recipe,
         { active: false },
         { new: true }
      );
      return res.status(200).json(recipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//hard delete
recipeRoute.delete("/delete/:id", async (req, res) => {
   try {
      const id_recipe = req.params.id;

      const recipe = await RecipeModel.findByIdAndDelete(id_recipe);

      return res.status(200).json(recipe);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//all recipes from level
recipeRoute.get("/all/:level", async (req, res) => {
   try {
      const level = req.params.level;
      const recipes = await RecipeModel.find({ level: level });
      return res.status(200).json(recipes);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//all by dishType
recipeRoute.get("/all/dish-type/:dishType", async (req, res) => {
   try {
      const dishType = req.params.dishType;

      //sort by duration and return in ascending order and just the fields title and ingredients and duration
      const recipes = await RecipeModel.find({ dishType: dishType })
         .sort({ duration: 1 }) // 1 = ascending order | -1 = descending order // para fazer dois sort => sort({duration: 1, title: -1})
         .select({ title: 1, ingredients: 1, duration: 1, _id: 0 });

      return res.status(200).json(recipes);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//contar a quantidade de receitas por nível
recipeRoute.get("/count/:dishType", async (req, res) => {
   try {
      const dishType = req.params.dishType;

      const count = await RecipeModel.countDocuments({ dishType: dishType });

      if (count === 0) {
         return res
            .status(400)
            .json({ message: "Nenhum documento encontrado" });
      }

      return res.status(200).json(count);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

recipeRoute.get("/get/dessert", async (req, res) => {
   try {
      //selecionando os campos desejados
      // 1 -> seleciona o campo
      // 0 -> não vem esse campo
      const dessertRecipes = await RecipeModel.find({
         dishType: "dessert",
      }).select({ title: 1, duration: 1, _id: 0 });

      return res.status(200).json(dessertRecipes);
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

recipeRoute.get("/:id_recipe", async (req, res) => {
   try {
      const id_recipe = req.params.id_recipe;

      const oneRecipe = await RecipeModel.findById(id_recipe).populate(
         "creator"
      );

      return res.status(200).json(oneRecipe);
   } catch (error) {
      console.log(console.error);
      return res.status(500).json(error);
   }
});

export default recipeRoute;
