import { useState } from "react";

export default function User() {
   /* const user = {
      name: "Karen",
      age: 30,
   }; */

   const [user, setUser] = useState({
      name: "Karen",
      age: 30,
   });

   const [brand, setBrand] = useState("Acer");

   function handleAge() {
      //retirar 5 anos da minha idade
      //spread -> copia
      setUser({ ...user, age: user.age - 5 });
   }

   console.log(user);

   //criar um state para guardar uma STRING com a marca do seu computador
   //criar um botão que vai apagar a marca do computador

   function handleBrand() {
      setBrand("");
   }

   return (
      <div>
         <h1>
            Meu nome é {user.name}. Eu tenho {user.age} anos!
         </h1>

         <button onClick={handleAge}>Mudar minha idade</button>

         <h1>Marca do meu computador: {brand}</h1>
         <button onClick={handleBrand}>Apagar marca</button>
      </div>
   );
}
