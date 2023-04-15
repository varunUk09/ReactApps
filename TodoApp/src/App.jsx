import { useState } from "react";
import AdditemForm from "./AppComps/AdditemForm";
import Todoitems from "./AppComps/Todoitems";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    let newTaskList = [
      ...taskList,
      {
        id: crypto.randomUUID(),
        taskName: task,
      },
    ];
    setTaskList(newTaskList);
    console.log(taskList);
  };
  const updateTask = value => {
    setTask(value);
  };
  const formProp = {
    onSubmit: handleSubmit,
    task: task,
    setTask: updateTask,
  };
  return (
    <>
      <div className='container'>
        <AdditemForm {...formProp} />
        <Todoitems />
      </div>
    </>
  );
}
