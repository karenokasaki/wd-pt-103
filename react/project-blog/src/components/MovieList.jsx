import MovieCard from "./MovieCard";

export default function MovieList(props) {
   console.log(props.arrayFilmes);
   return (
      <div className="posts">
         <div className="posts-header">
            <p>FILMES DA SEMANA</p>
         </div>

         {/* MovieCard */}
         <div className="posts-div">
            {props.arrayFilmes.map((filme) => {
               return <MovieCard filme={filme} />;
            })}
         </div>
      </div>
   );
}
