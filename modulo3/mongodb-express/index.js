import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config.js";
import userRoute from "./routes/user.routes.js";
import recipeRoute from "./routes/recipe.routes.js";

//instanciar o express
const app = express();

//como acessar uma variável de ambiente
dotenv.config();

//configurar o express para devolver json
app.use(express.json());

//habilitar o cors
app.use(cors());

//conectar com o banco de dados
connectDB();

//base url -> http://localhost:4000/user
app.use("/user", userRoute);
app.use("/recipe", recipeRoute);

//SEMPRE PRECISA FICAR NO FINAL DO SEU ARQUIVO
app.listen(4000, () => {
   // npm run dev -> inicia o servidor
   console.log("Servidor up and running on port 4000");
});
//nada que esteja pra baixo dessa função será executado
