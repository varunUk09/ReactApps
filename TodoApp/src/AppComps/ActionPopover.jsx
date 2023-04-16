import { useContext } from "react";
import { Todocontext } from "../App.jsx";
export default function ActionPopover({ taskId }) {
  const { deleteTask } = useContext(Todocontext);
  return (
    <ul className='action-popover'>
      <button
        className='cursor'
        onClick={() => {
          deleteTask(taskId);
        }}>
        Delete
      </button>
    </ul>
  );
}
