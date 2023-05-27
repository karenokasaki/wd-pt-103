import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
   const arrayPosts = [
      {
         title: "Olá Mundo",
         text: "Este é o meu primeiro post. Olá, pessoal!",
         author: "João Silva",
         publish: true,
         likes: 17,
         save: true,
      },
      {
         title: "Minha Receita Favorita",
         text: "Hoje, vou compartilhar minha receita favorita. É super deliciosa!",
         author: "Maria Santos",
         publish: false,
         likes: 0,
         save: false,
      },
      {
         title: "Recomendação de Livro",
         text: "Acabei de terminar de ler um livro incrível. Altamente recomendado! ",
         author: "Pedro Rocha",
         publish: true,
         likes: 7,
         save: true,
      },
   ];

   return (
      <div>
         <Navbar />
         <Posts info={arrayPosts} />
      </div>
   );
}

export default App;
