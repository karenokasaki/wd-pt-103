/* quando precisa fazer uma chamada pra uma api */
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
   const [apartments, setApartments] = useState([]);

   useEffect(() => {
      async function fetchApartments() {
         const response = await axios.get(
            "https://webdev103.cyclic.app/apartamentos"
         );
         setApartments(response.data);
      }

      fetchApartments();
   }, []);

   console.log(apartments);

   return (
      <div>
         <h1>Home</h1>

         {apartments.map((apartment) => {
            return (
               <div key={apartment._id}>
                  <img width={200} src={apartment.image} />
                  <h2>
                     {apartment.title} - {apartment.city}
                  </h2>
                  <p>R$ {apartment.rent}</p>
               </div>
            );
         })}
      </div>
   );
}
