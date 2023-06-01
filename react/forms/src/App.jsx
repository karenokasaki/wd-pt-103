import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
   return (
      <>
         <AddTodo />
         <TodoList />
      </>
   );
}

export default App;
