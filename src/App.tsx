import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn Javascript"),
    new Todo("Learn Typescript"),
  ]);

  const addTodoHandler = (todo: Todo) => {
    setTodos((prev) => prev.concat(todo));
  };

  const deleteTodoHandler = (todo: Todo) => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    console.log(`Deleted todo with id: ${todo.id}`);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
