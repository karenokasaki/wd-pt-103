import { useState } from "react";

export default function TodoList() {
   const [list, setList] = useState([
      "Fazer compras",
      "Estudar React",
      "Estudar CSS",
      "Estudar Forms no react!",
   ]);

   return (
      <div>
         <h1>Todo List</h1>

         {/* Aqui vai a minha lista de afazeres!! */}
         <div>
            {list.map((todo) => {
               return <p key={todo}>{todo}</p>;
            })}
         </div>
      </div>
   );
}
