import Post from "./Post";

/* 
props = {
   info : araryPosts,
}
*/

export default function Posts(props) {
   //console.log(props.info); // -> [array de posts]
   // tamanho da array: props.info.length === 3

   return (
      <div className="posts">
         <div className="posts-header">
            <p>POSTS DA SEMANA</p>
         </div>

         <div className="posts-div">
            {/* Aqui vai os meus posts -> quero chamar o componente POST */}
            <Post post={props.info[0]} />
            <Post post={props.info[1]} />
            <Post post={props.info[2]} />
         </div>

         <div>
            <p>Total de posts: {props.info.length}</p>
         </div>
      </div>
   );
}
