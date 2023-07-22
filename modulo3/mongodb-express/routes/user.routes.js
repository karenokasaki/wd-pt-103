import express from "express";
import UserModel from "../model/user.model.js";

// url: localhost:4000/user/
const router = express.Router();

//criar um usuário
//localhost:4000/user/create
router.post("/create", async (req, res) => {
   try {
      const form = req.body; //tudo o que foi enviado no insomnia, será guardado dentro dessa variável

      const newUser = await UserModel.create(form);

      return res.status(201).json(newUser);
   } catch (error) {
      //Isso é lidar com o erro
      console.log(error);
      return res.status(500).json(error);
   }
});

//pegar TODOS os usuários do banco de dados
//localhost:4000/user/all
router.get("/all", async (req, res) => {
   const allUsers = await UserModel.find({ active: true });

   return res.status(200).json(allUsers);
});

//editar UM usuário apenas pelo ID
//localhost:4000/user/edit/33271987612931dugsa
router.put("/edit/:id", async (req, res) => {
   const idUser = req.params.id;

   const updatedUser = await UserModel.findByIdAndUpdate(
      idUser,
      { ...req.body },
      { new: true, runValidators: true }
   );

   return res.status(200).json(updatedUser);
});

//hard delete -> EXCLUIR o documento do banco de dados
router.delete("/delete/:id", async (req, res) => {
   try {
      const id = req.params.id;

      const deletedUser = await UserModel.findByIdAndDelete(id);

      return res.status(200).json("Usuário deletado com sucesso");
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

//soft delete -> desativar o documento no banco de dados
router.delete("/deactivate/:id", async (req, res) => {
   try {
      const id = req.params.id;

      const deactivatedUser = await UserModel.findByIdAndUpdate(id, {
         active: false,
      });

      return res.status(200).json("Usuário desativado");
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

router.post("/activate/:id", async (req, res) => {
   try {
      const id = req.params.id;

      const deactivatedUser = await UserModel.findByIdAndUpdate(id, {
         active: true,
      });

      return res.status(200).json("Usuário desativado");
   } catch (error) {
      console.log(error);
      return res.status(500).json(error);
   }
});

export default router;
