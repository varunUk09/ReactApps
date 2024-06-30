import { useState, useContext } from "react";
import { TodoContext } from "./MyContext";
export default function EditTodo({ data }) {
  const [value, setValue] = useState(data.task);
  const { updateTask } = useContext(TodoContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        updateTask(data.id, value);
      }}
      className='todoForm'>
      <input
        type='text'
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        className='todoInput'
      />
      <button type='submit' className='todoSubmit todoButton'>
        Update
      </button>
    </form>
  );
}
