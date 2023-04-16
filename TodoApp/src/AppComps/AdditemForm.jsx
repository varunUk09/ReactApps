import { useContext } from "react";
import { Todocontext } from "../App.jsx";
export default function AdditemForm() {
  const { handleSubmit, task, updateTask } = useContext(Todocontext);
  return (
    <>
      <form className='add-task-frm' onSubmit={handleSubmit}>
        <div className='input-row'>
          <input
            type='text'
            placeholder='Add a task...'
            value={task}
            onChange={e => {
              updateTask(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
}
