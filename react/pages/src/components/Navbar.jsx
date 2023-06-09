import { Link } from "react-router-dom";

export default function Navbar() {
   //quando estamos usando o react-router-dom
   // vamos substituir todas as tags <a></a> pela tag <Link> que vem do react router dom

   //<a></a> ela recarrega a página inteira. por isso não utilizamos ela
   return (
      <nav>
         <ul className="ulNavbar">
            <li>
               <Link to="/">Home</Link>
            </li>

            <li>
               <Link to="/about">About Page</Link>
            </li>

            <li>
               <Link to="/products">Produtos</Link>
            </li>
         </ul>
      </nav>
   );
}
