import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApartmentForm from "./pages/ApartmentForm";
import Navbar from "./components/Narbar";

function App() {
   return (
      <>
         <Navbar />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar" element={<ApartmentForm />} />
         </Routes>
      </>
   );
}

export default App;
