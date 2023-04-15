import ActionPopover from "./ActionPopover";
import Todoitem from "./Todoitem";

export default function Todoitems() {
  return (
    <>
      <ul className='todo-list'>
        <li>
          <label className='task-name cursor'>
            <input type='checkbox' className='cursor' />
            Getting an invite for dribble
          </label>
          <div className='action-group'>
            <button className='action-cta cursor'>
              <span>...</span>
            </button>
            <ActionPopover />
          </div>
        </li>
      </ul>
    </>
  );
}
