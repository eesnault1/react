import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setnewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setnewItem("");
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => toggleTodo(todo)}
                  checked={todo.completed}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
