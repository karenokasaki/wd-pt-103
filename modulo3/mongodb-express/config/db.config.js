//mongoose -> ORM
import mongoose from "mongoose";

async function connectDB() {
   try {
      const connection = await mongoose.connect(process.env.MONGODB_URI);
      console.log(
         "Conectado com o banco de dados ",
         connection.connection.name
      );
   } catch (error) {
      console.log(error);
   }
}

export default connectDB