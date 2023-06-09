import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductsPage() {
   //criar um state para guardar as informações
   const [products, setProducts] = useState([]);

   useEffect(() => {
      async function fetchProducts() {
         const response = await axios.get("https://dummyjson.com/products");
         setProducts(response.data.products);
      }

      fetchProducts();
   }, []);
   // [] => o useEffect só vai ser executado quando o componente montar. E NUNCA MAIS

   console.log(products);

   return (
      <div>
         <h2>Produtos em destaque</h2>

         <div className="products">
            {products.map((product) => {
               return (
                  <div key={product.id} className="card">
                     <img src={product.thumbnail} />
                     <h3>{product.title}</h3>
                     <p>R${product.price}</p>

                     {product.price < 500 && (
                        <p>Produto em promoção, não perca!</p>
                     )}
                  </div>
               );
            })}
         </div>
      </div>
   );
}
