import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, handleDelete }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
