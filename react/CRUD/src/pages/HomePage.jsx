/* quando precisa fazer uma chamada pra uma api */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

         <div className="cards">
            {apartments.map((apartment) => {
               return (
                  <div key={apartment._id} className="card">
                     <img width={200} src={apartment.image} />
                     <h2>
                        {apartment.title} - {apartment.city}
                     </h2>
                     <p>R$ {apartment.rent}</p>

                     <Link to={`/apartamentos/${apartment._id}`}>
                        Ver detalhes
                     </Link>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
