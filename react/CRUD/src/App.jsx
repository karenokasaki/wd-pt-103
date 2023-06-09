import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApartmentForm from "./pages/ApartmentForm";
import Navbar from "./components/Narbar";
import ApartmentDetail from "./pages/ApartmentDetail";
import { Toaster } from "react-hot-toast";

function App() {
   return (
      <>
         <Toaster />
         <Navbar />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criar" element={<ApartmentForm />} />
            <Route path="/apartamentos/:id" element={<ApartmentDetail />} />
         </Routes>
      </>
   );
}

export default App;
