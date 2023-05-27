import "./App.css";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Title from "./components/Title";

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
      {
         title: "Dicas de Viagem",
         text: "Acabei de voltar de uma viagem incrível! Vou compartilhar algumas dicas e recomendações.",
         author: "Ana Costa",
         publish: true,
         likes: 12,
         save: false,
      },
   ];

   const arrayFilmes = [
      {
         title: "Vingadores: Ultimato",
         sinopse:
            "Após os eventos devastadores de Guerra Infinita, os Vingadores se reúnem mais uma vez para desfazer as ações de Thanos e restaurar a ordem no universo.",
         rating: 9.2,
         release: false,
      },
      {
         title: "O Poderoso Chefão",
         sinopse:
            "A saga da família Corleone, envolvendo poder, corrupção e o submundo do crime organizado, ao longo de várias décadas.",
         rating: 9.2,
         release: true,
      },
      {
         title: "Interestelar",
         sinopse:
            "Um grupo de exploradores espaciais embarca em uma jornada interestelar em busca de um novo lar para a humanidade, enfrentando desafios cósmicos e descobertas surpreendentes.",
         rating: 8.6,
         release: true,
      },
   ];

   return (
      <div>
         <Navbar />

         {/* tag de abertura <Componente> {CHILDREN} </Componente> tag de fechamento    */}
         <Title> WEB DEV 2023 - IRONHACK EUROPA </Title>

         <Posts info={arrayPosts} />
         <MovieList arrayFilmes={arrayFilmes} />
      </div>
   );
}

export default App;
