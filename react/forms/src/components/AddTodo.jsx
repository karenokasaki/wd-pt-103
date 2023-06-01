export default function AddTodo() {
   return (
      <div>
         <form className="form">
            {/* Form mais simples que tem. -> label -> input -> button */}
            <label>Adicione uma tarefa</label>
            <input type="text" />
            <button>Salvar!</button>
         </form>
      </div>
   );
}
