import express from "express";

//instanciar o roteador
const notesRouter = express.Router();

// rota de criar uma nota
// passar o id_user de quem está criando a nota
// criem uma nova nota + adicionar o campo de quem criou
// adicionar o id_nota criada na array de notes do usuário

notesRouter.post("/create-note/:id_user", async (req, res) => {

});

notesRouter.get("/all", async(req,res) => {
   
})

// exportar a rota!!
export default notesRouter;
