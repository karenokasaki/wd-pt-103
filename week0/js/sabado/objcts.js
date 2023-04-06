//array => [array]
//objeto => { key: value }

const turma = {
  material: {
    model1: {
      parte1: "html",
      parte2: "css",
      parte3: "js",
    },
    model2: {
      parte1: ["react", "api"],
      parte2: ["integração com api", "integração com back end"],
      parte3: [{ nameProject: "React", back: "Ironhack" }],
    },
  },
  isCompleted: true,
  numberOfStudents: 9,
  students: ["fabi", "gabriel", "ale", "carol", "victor"],
  course: "Web Dev",
  classNumber: 103,
  teacher: "karen",
};

if (turma.isCompleted === false) {
  console.log("A turma ainda não finalizou o curso");
}
if (turma.isCompleted === true) {
  console.log("Parabéns, a turma foi finalizada");
}

console.log(turma.material.model2.parte3[0].back);
//acessar propriedades dentro de um objeto
//console.log(turma.students);

//como alterar valores dentro de um objeto
turma.numberOfStudents = 8;
//      array
turma.students.push("Giu");

//Como adicionar propriedades em um objeto existente
turma.days = ["quinta", "terça", "sabado"];

//excluir uma propriedade
delete turma.isCompleted;

//diferença entre uma array e um objeto -> array PRECISA de index -> obj PRECISA de uma CHAVE
