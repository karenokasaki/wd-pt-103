import { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
   const [products, setProducts] = useState([]);
   const [showProducts, setShowProducts] = useState(false);

   useEffect(() => {
      async function fetchProducts() {
         const response = await axios.get("https://dummyjson.com/products");
         setProducts(response.data.products);
      }
      fetchProducts();
   }, []);

   function handleProducts() {
      setShowProducts(!showProducts);
   }

   return (
      <div>
         <h2>Axios</h2>

         <button onClick={handleProducts}>Mostrar Produtos</button>

         {showProducts === true && (
            <div>
               {products.map((product) => {
                  return (
                     <div key={product.id}>
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <p>R${product.price},00</p>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
}
