import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <div>
         <p>
            <Link to="/">Home</Link>
         </p>
         <p>
            <Link to="/criar">Crie um anúncio</Link>
         </p>
      </div>
   );
}
