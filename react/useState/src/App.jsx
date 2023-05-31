import "./App.css";
//tudo o que a gente for usar nesse componente, precisa ser importado.
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import User from "./components/User";

function App() {
   //let counter = 0; //0 é o valor inicial

   const [counter, setCounter] = useState(0);

   const [showLogo, setShowLogo] = useState(false);

   const [color, setColor] = useState("white");

   function handleAdd() {
      // counter++; // -> diretamente tentando alterar o valor do meu state - não funciona
      setCounter(counter + 1); // estou mudando o valor do state PELA FUNÇÃO SETCOUNTER -> funciona
   }

   function handleSub() {
      if (counter === 0) {
         return;
      }
      setCounter(counter - 1);
   }

   function handleLogo() {
      //toggle -> interruptor -> se ta ligado -> desliga -> liga
      // se showLogo for true -> ele é negado
      setShowLogo(!showLogo);
   }

   console.log(counter); //grey

   function handleColor() {
      setColor("grey");
   }

   return (
      <div style={{ backgroundColor: color }}>
         {showLogo === true && <img height={100} src={reactLogo} />}

         <button onClick={handleColor}>Night mode</button>

         <div>
            <h1>Contador</h1>
            <h1>{counter}</h1>
            <div>
               <button onClick={handleAdd}>+</button>
               <button onClick={handleSub}>-</button>
            </div>
         </div>

         <div style={{ margin: "30px" }}>
            <button onClick={handleLogo}>
               {showLogo === true ? "Esconder Logo" : "Mostrar Logo"}
            </button>
         </div>

         <User />
      </div>
   );
}

export default App;
