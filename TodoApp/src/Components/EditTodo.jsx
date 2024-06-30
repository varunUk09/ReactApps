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
      }}>
      <input
        type='text'
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <button type='submit'>Update</button>
    </form>
  );
}
