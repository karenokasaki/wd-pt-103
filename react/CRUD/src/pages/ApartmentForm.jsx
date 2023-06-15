import { useState } from "react";

export default function ApartmentForm() {
   //o correto é: Available
   const [form, setForm] = useState({
      title: "",
      rent: "",
      isAvalible: false,
      image: "",
      description: "",
      city: "",
      pool: false,
   });

   return (
      <div>
         <h1>Crie um anúncio de apartamento</h1>
      </div>
   );
}
