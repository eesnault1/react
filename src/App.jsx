import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }
  function toggleTodo(toggleTodo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === toggleTodo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function handleDelete(deleteTodo) {
    setTodos(todos.filter((item) => item.id !== deleteTodo.id));
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}
