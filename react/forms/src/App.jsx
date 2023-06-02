import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

import "./App.css";

function App() {
   const [list, setList] = useState([
      "Fazer compras",
      "Estudar React",
      "Estudar CSS",
      "Estudar Forms no react!",
   ]);

   return (
      <>
         <AddTodo list={list} setList={setList} />
         <TodoList list={list} />
      </>
   );
}

export default App;
