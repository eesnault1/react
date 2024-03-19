export function TodoItem({ todo, toggleTodo, handleDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo)}
          checked={todo.completed}
        />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => handleDelete(todo)}>
        Delete
      </button>
    </li>
  );
}
