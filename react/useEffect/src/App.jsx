import { useState } from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";

function App() {
   return (
      <>
         <h1>useEffect e dataFetching</h1>
         {/* <Fetch /> */}
         <Axios />
      </>
   );
}

export default App;
