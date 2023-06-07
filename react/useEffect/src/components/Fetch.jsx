import { useState, useEffect } from "react";

export default function Fetch() {
   //como fazer uma chamada de api com o fetch()
   // fetch() -> nativo do JS -> é uma forma NATIVA do js de fazer requisições http (get, post, put, delete, etc)

   //state que vai GUARDAR as informações do meu fetch
   const [products, setProducts] = useState([]);

   useEffect(() => {
      // quando o componente foi MONTADO (renderizado)
      //console.log("INDO BUSCAR AS INFORMAÇÕES");

      //preciso de uma função ASYNC que vai buscar as informações do banco de dados
      async function fetchPosts() {
         const response = await fetch("https://dummyjson.com/products"); //end point
         //antes de utilizar a response, é necessário transformar ela para uma array
         const data = await response.json();
         setProducts(data.products);
         //console.log("INFORMAÇÕES DISPONÍVEIS");
      }

      fetchPosts(); //invocando a função acima
   }, []);
   //[] => array de dependencias

   //console.log(products);

   return (
      <div>
         <h2>Fetch</h2>
      </div>
   );
}
