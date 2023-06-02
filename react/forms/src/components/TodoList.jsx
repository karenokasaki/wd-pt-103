
export default function TodoList(props) {

   /* state estava aqui */

   return (
      <div>
         <h1>Todo List</h1>

         {/* Aqui vai a minha lista de afazeres!! */}
         <div>
            {props.list.map((todo) => {
               return <p key={todo}>{todo}</p>;
            })}
         </div>
      </div>
   );
}
