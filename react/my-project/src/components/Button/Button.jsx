// nome que você dá pra sua função será o nome do seu componente!!

export default function Button({ text }) {
   function clicked() {
      alert("PARABÉNS VC CONSEGUIU. DOM É RUIM DEMAIS");
   }

   function editar() {
      alert("editado com sucesso");
   }

   if (text === "salvar") {
      return <button onClick={clicked} className="btnSalvar">{text}</button>;
   }

   if (text === "editar") {
      return <button onClick={editar}>{text}</button>;
   }
}
