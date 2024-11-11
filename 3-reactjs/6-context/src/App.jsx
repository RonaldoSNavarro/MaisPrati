import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>
        <AddTodo/>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
