import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ApartmentDetail() {
   //inicializando o useParams()
   const params = useParams();
   const navigate = useNavigate();

   console.log(params.id); // id do anuncio que está na URL

   const [apartment, setApartment] = useState({});
   const [showForm, setShowForm] = useState(false);
   const [form, setForm] = useState({
      title: "",
      rent: "",
      isAvalible: false,
      image: "",
      description: "",
      city: "",
      pool: false,
   });

   useEffect(() => {
      async function fetchApartment() {
         const response = await axios.get(
            `https://webdev103.cyclic.app/apartamentos/${params.id}`
         );
         setApartment(response.data);
         setForm(response.data);
      }

      fetchApartment();
   }, []);

   async function handleDelete(e) {
      //toda função que vai fazer alguma chamada pra API -> ou seja -> usar o axios
      // PRECISA SER ASYNC
      e.preventDefault();
      try {
         const response = await axios.delete(
            `https://webdev103.cyclic.app/apartamentos/${params.id}`
         );
         console.log(response.data); // => documento excluído com sucesso
         navigate("/");
         toast.success("Tudo certo!");
      } catch (error) {
         console.log(error);
      }
   }

   async function handleSubmit(e) {
      e.preventDefault();
      //tudo o que vai acontecer quando eu quiser SALVAR o meu formulário
      console.log(form);

      try {
         //tenta fazer isso se der error -> vai pro catch

         //fazer o post -> criação de um apartamento no meu banco de dados
         const response = await axios.put(
            `https://webdev103.cyclic.app/apartamentos/${params.id}`,
            form
         );
         toast.success("Anuncio editado com sucesso!");
         setShowForm(false);
      } catch (error) {
         //o catch só vai rodar quando algo der errado no try
         console.log(error);
      }
   }

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

   return (
      <div>
         {showForm === false && (
            <>
               <h2>
                  {apartment.title} - {apartment.city}
               </h2>
               <p>Descrição do imóvel: {apartment.description}</p>
               <p>Aluguel: {apartment.rent}</p>
               <p>
                  {apartment.pool === true ? "Tem piscina" : "Não tem piscina"}
               </p>
               <p>
                  {apartment.isAvalible === true
                     ? "Está disponível"
                     : "Já está alugado"}
               </p>

               <button onClick={handleDelete}>Deletar anúncio</button>
            </>
         )}

         <button onClick={() => setShowForm(!showForm)}>Editar Anuncio</button>

         {showForm === true && (
            <>
               <h1>Aqui está o formulário de edição</h1>

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
            </>
         )}
      </div>
   );
}
