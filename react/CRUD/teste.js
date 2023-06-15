const form = {
   name: "karen",
   age: 30,
   city: "Ribas do Rio Pardo",
};

console.log(form);

const newForm = {
   ...form,
   name: "Gabriel",
}; 

function handleChange(e) {
   setForm({...form, [e.target.name] : e.target.value})
} 
<input name="name" value={form.name} />
<input name="age" value={form.age}/>
<input name="city" value={form.city} />
console.log(newForm);
