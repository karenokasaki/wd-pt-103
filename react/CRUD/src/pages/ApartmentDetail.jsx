import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ApartmentDetail() {
   //inicializando o useParams()
   const params = useParams();
   const navigate = useNavigate();

   console.log(params.id); // id do anuncio que está na URL

   const [apartment, setApartment] = useState({});

   useEffect(() => {
      async function fetchApartment() {
         const response = await axios.get(
            `https://webdev103.cyclic.app/apartamentos/${params.id}`
         );
         setApartment(response.data);
      }

      fetchApartment();
   }, []);

   console.log(apartment);

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
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div>
         <h2>
            {apartment.title} - {apartment.city}
         </h2>
         <p>Descrição do imóvel: {apartment.description}</p>
         <p>Aluguel: {apartment.rent}</p>
         <p>{apartment.pool === true ? "Tem piscina" : "Não tem piscina"}</p>
         <p>
            {apartment.isAvalible === true
               ? "Está disponível"
               : "Já está alugado"}
         </p>

         <button onClick={handleDelete}>Deletar anúncio</button>
      </div>
   );
}
