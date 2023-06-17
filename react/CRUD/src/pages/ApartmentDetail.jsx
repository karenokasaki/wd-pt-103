import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ApartmentDetail() {
   //inicializando o useParams()
   const params = useParams();

   console.log(params.id); // id do anuncio que está na URL

   const [apartment, setApartment] = useState({});

   useEffect(() => {
      async function fetch() {
         const response = await axios.get(
            `https://webdev103.cyclic.app/apartamentos/${params.id}`
         );

         setApartment(response.data);
      }

      fetch();
   }, []);

   return (
      <div>
         <h1>Detalhes do anuncio</h1>

         
      </div>
   );
}
