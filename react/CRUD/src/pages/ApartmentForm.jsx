import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ApartmentForm() {
   const navigate = useNavigate();

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

   function handleChange(e) {
      console.log(e.target.type);

      if (e.target.type === "checkbox") {
         setForm({ ...form, [e.target.name]: e.target.checked });
         return;
      }

      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   }

   console.log(form);

   async function handleSubmit(e) {
      e.preventDefault();
      //tudo o que vai acontecer quando eu quiser SALVAR o meu formulário
      console.log(form);

      try {
         //tenta fazer isso se der error -> vai pro catch

         //fazer o post -> criação de um apartamento no meu banco de dados
         const response = await axios.post(
            "https://webdev103.cyclic.app/apartamentos",
            form
         );
         toast.success("Anuncio criado com sucesso");
         navigate("/");
      } catch (error) {
         //o catch só vai rodar quando algo der errado no try
         console.log(error);
      }
   }

   console.log(form);

   return (
      <div>
         <h1>Crie um anúncio de apartamento</h1>

         <form onSubmit={handleSubmit}>
            <label>Título</label>
            <input
               type="text"
               name="title"
               value={form.title}
               onChange={handleChange}
               required
               placeholder="Escreva o nome da propriedade"
            />

            <label>Valor do Aluguel</label>
            <input
               type="number"
               name="rent"
               min={0}
               value={form.rent}
               onChange={handleChange}
            />

            <label>Está disponível?</label>
            <input
               type="checkbox"
               name="isAvalible"
               checked={form.isAvalible}
               onChange={handleChange}
            />

            <label>Imagem do apartamento</label>
            <input
               type="text"
               name="image"
               value={form.image}
               onChange={handleChange}
            />

            <label>Descrição</label>
            <input
               type="text"
               name="description"
               value={form.description}
               onChange={handleChange}
            />

            <label>Cidade</label>
            <input
               type="text"
               name="city"
               value={form.city}
               onChange={handleChange}
            />

            <label>Possui piscina?</label>
            <input
               type="checkbox"
               name="pool"
               checked={form.pool}
               onChange={handleChange}
            />

            <button type="submit">Salvar</button>
         </form>
      </div>
   );
}
