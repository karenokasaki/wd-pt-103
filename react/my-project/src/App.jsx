import "./App.css";

import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
   // UMA FUNÇÃO -> retorna HTML -> JSX

   const lesson = "React";

   const perfil = {
      name: "Karen",
      age: 30,
      habits: "Dormir",
   };

   return (
      <div>
         <h1>REACT PROJECT</h1>

         <div>
            <h2>Aula de hoje é: {lesson} </h2>
         </div>

         <div>
            Eu sou a {perfil.name} e tenho {perfil.age} anos e gosto de{" "}
            {perfil.habits}
         </div>

         <img />

         {/* invocando a função Button() */}
         <Button text="SALVAR" />
         <Button text="EDITAR" />
         <Button text="EXCLUIR" />

         <Card />
         <Card />
         <Card />
         <Card />
      </div>
   );
}

export default App;
