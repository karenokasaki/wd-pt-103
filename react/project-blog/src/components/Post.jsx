/* 
props = {
   post : {title: "...", text: "...", author: "..."}
}
*/

export default function Post(props) {
   console.log(props.post);

   /* RENDERIZAÇÃO CONDICIONAL */

   return (
      <div className="post">
         <h1>{props.post.title}</h1>
         <p>{props.post.text}</p>
         <p>Author: {props.post.author}</p>

         {props.post.publish === true && <p>Publicado! 💚</p>}

         {props.post.publish === false && <p>Não publicado! ❌</p>}

         {props.post.likes >= 10 && <p>Mais curtido 👍</p>}

         {props.post.save === true && <p>💾</p>}
         {props.post.save === false && <p>⛔</p>}
      </div>
   );
}
