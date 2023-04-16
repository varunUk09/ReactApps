import { useContext } from "react";
import Todoitem from "./Todoitem";
import { Todocontext } from "../App.jsx";

export default function Todoitems() {
  const { taskList } = useContext(Todocontext);
  return (
    <>
      <ul className='todo-list'>
        {taskList.length > 0 ? (
          taskList.map(task => {
            return <Todoitem key={task.id} task={task} />;
          })
        ) : (
          <span className='no-task-msg'>No tasks added</span>
        )}
      </ul>
    </>
  );
}
