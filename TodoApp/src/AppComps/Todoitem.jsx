import { useContext } from "react";
import { Todocontext } from "../App.jsx";
import ActionPopover from "./ActionPopover";
export default function Todoitem({ task }) {
  const { completedTask } = useContext(Todocontext);
  return (
    <li>
      <label className='task-name cursor'>
        <input
          type='checkbox'
          className='cursor'
          checked={task.completed}
          onChange={() => {
            completedTask(task.id);
          }}
        />
        <span>{task.taskName}</span>
      </label>
      <div className='action-group'>
        <button
          className='action-cta cursor'
          onClick={function (e) {
            e.target.closest(".action-group").classList.toggle("show");
          }}>
          <span>...</span>
        </button>
        <ActionPopover taskId={task.id} />
      </div>
    </li>
  );
}
