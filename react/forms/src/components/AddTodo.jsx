import { useState } from "react";

export default function AddTodo(props) {
   /* FORMULARIO CONTROLADOS */
   /* Criando um state para LINKAR ele ao meu input -> input será controlado pelo meu state */
   const [newTodo, setNewTodo] = useState("");

   function handleChange(event) {
      //console.log(event.target); // input que a função handleChange se encontra
      //console.log(event.target.value); // as teclas apertadas dentro do input
      setNewTodo(event.target.value);
   }

   function handleSubmit(event) {
      //preventDefault previne que o navegador recarregue quando o botão for clicado.
      event.preventDefault();
      console.log(newTodo);
      //preciso da função para ALTERAR a lista de todos
      console.log("Form submetido. Salvar na list");
      props.setList([...props.list, newTodo]);
   }

   /* 
      State -> para guardar o formulário
      função handleChange -> alterar o valor do state
      adicionar o value e o onChange na tag <input></input>
   */

   return (
      <div>
         <form className="form">
            {/* Form mais simples que tem. -> label -> input -> button */}
            <label>Adicione uma tarefa</label>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button onClick={handleSubmit}>Salvar!</button>
         </form>
      </div>
   );
}
