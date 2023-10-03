import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("Value: ", value, "Categry: ", category);
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
