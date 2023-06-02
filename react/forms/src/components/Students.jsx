import { useState } from "react";

export default function Students() {
   const [studentsList, setStudentsList] = useState([
      {
         name: "Gabriel",
         age: 32,
      },
      {
         name: "fabi",
         age: 22,
      },
      {
         name: "giu",
         age: 21,
      },
      {
         name: "ale",
         age: 35,
      },
   ]);

   const [form, setForm] = useState({
      name: "",
      age: 0,
   });

   function handleChange(e) {
      console.log(e.target.name, e.target.value);
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function handleSubmit(e) {
      e.preventDefault();
      setStudentsList([...studentsList, form]);

      //resetando o formulário
      setForm({
         name: "",
         age: 0,
      });
   }

   return (
      <div>
         <h1>Meu alunos</h1>

         <div>
            {studentsList.map((student) => {
               return (
                  <p key={student.name}>
                     {student.name} - {student.age} anos.
                  </p>
               );
            })}
         </div>

         <form>
            <label>Nome</label>
            <input
               type="text"
               value={form.name}
               name="name"
               onChange={handleChange}
            />

            <label>Idade</label>
            <input
               type="number"
               value={form.age}
               name="age"
               onChange={handleChange}
            />

            <button onClick={handleSubmit}>Salvar</button>
         </form>
      </div>
   );
}
