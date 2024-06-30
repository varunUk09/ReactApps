import { useContext } from "react";
import { TodoContext } from "./MyContext";
export default function Todo({ data }) {
  const { deleteTodo, isEditingTodo, isCompletedTodo } = useContext(TodoContext);
  return (
    <li style={{ textDecoration: `${data.isCompleted ? "line-through" : "none"}` }}>
      {data.task}
      <div>
        <button
          onClick={() => {
            deleteTodo(data.id);
          }}>
          Delete
        </button>
        <button
          onClick={() => {
            isEditingTodo(data.id);
          }}>
          Edit
        </button>
        <button
          onClick={() => {
            isCompletedTodo(data.id);
          }}>
          Completed
        </button>
      </div>
    </li>
  );
}
