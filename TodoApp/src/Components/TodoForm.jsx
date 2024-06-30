import { useContext } from "react";
import Context from "./MyContext";
export default function TodoForm() {
  const { task, setTask, addTask } = useContext(Context);
  return (
    <form
      onSubmit={e => {
        addTask(e);
      }}>
      <input type='text' placeholder='What is task today?' onChange={e => setTask(e.target.value)} value={task} />
      <button type='submit'>Add Task</button>
    </form>
  );
}
