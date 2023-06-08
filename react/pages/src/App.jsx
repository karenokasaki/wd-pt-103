import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
   // o arquivo APP.JSX vai servir para guardar e gerenciar todas as nossas rotas
   return (
      <div>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>
      </div>
   );
}

export default App;
