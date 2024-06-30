import { useContext } from "react";
import { TodoContext } from "./MyContext";
export default function Todo({ data }) {
  const { deleteTodo, isEditingTodo, isCompletedTodo } = useContext(TodoContext);
  return (
    <li className={`todoItem ${data.isCompleted ? "todoCompleted" : ""}`}>
      <div
        className='todoCtaTextWrpr'
        onClick={() => {
          isCompletedTodo(data.id);
        }}>
        <span className='todoRadio'></span>
        <p>{data.task}</p>
      </div>
      <div className='todoItemActions'>
        <button
          onClick={() => {
            deleteTodo(data.id);
          }}
          className='todoButton'>
          Delete
        </button>
        <button
          onClick={() => {
            isEditingTodo(data.id);
          }}
          className='todoButton'>
          Edit
        </button>
      </div>
    </li>
  );
}
