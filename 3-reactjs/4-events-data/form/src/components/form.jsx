import React, { useState } from "react";

function Form() {
  const [tarefas, setTarefas] = useState([]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleAddTask = () => {
    if (novaTarefa.trim() === "") {
      return;
    }
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tarefas.filter((_, i) => i != index);
    setTarefas(updatedTasks);
  };

  const handleCompletedTask = (index) => {
    const updatedTasks = tarefas.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(updatedTasks);
  };

  const handleClearCompletedTask = () => {
    const updatedTasks = tarefas.filter((tarefa) => !tarefa.concluida);
    setTarefas(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li
            key={index}
            style={{
              textDecoration: tarefa.concluida ? "line-through" : "none",
            }}
          >
            {tarefa.texto}
            <button onClick={() => handleCompletedTask(index)}>
              {tarefa.concluida ? "Desfazer" : "Concluído"}
            </button>
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClearCompletedTask}>Limpar Tarefas Concluídas</button>
    </div>
  );
}

export default Form;

// Exercício
// Marcar tarefa como concluída:

// Ao lado de cada tarefa, inclua um botão "Concluído". Quando clicado, o texto da tarefa deve ser riscado, indicando que a tarefa foi concluída.
// Utilize um estilo de texto riscado (por exemplo, text-decoration: line-trough;) para representar a conclusão.

// Limpar tarefas concluídas:

// Adicione um botão "Limpar tarefas concluídas" abaixo da lista de tarefas. Esse botão deve remover todas as tarefas que foram marcadas como concluídas.