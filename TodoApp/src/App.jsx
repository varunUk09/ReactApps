import { useState, createContext } from "react";
import AdditemForm from "./AppComps/AdditemForm";
import Todoitems from "./AppComps/Todoitems";

export const Todocontext = createContext();
export default function App() {
  let tasks = JSON.parse(localStorage.getItem("ITEM")) || [];
  // console.log("localstorage", tasks);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(tasks);
  const handleSubmit = e => {
    e.preventDefault();
    let newTaskList = [
      ...taskList,
      {
        id: crypto.randomUUID(),
        taskName: task,
        completed: false,
      },
    ];
    updateTaskList(newTaskList);
  };

  const updateTaskList = newTaskList => {
    localStorage.setItem("ITEM", JSON.stringify(newTaskList));
    setTaskList(newTaskList);
    setTask("");
  };

  const updateTask = value => {
    setTask(value);
  };

  const completedTask = id => {
    let newTaskList = [...taskList];
    newTaskList = newTaskList.filter(task => {
      if (task.id === id) {
        if (task.completed === false) task.completed = true;
        else task.completed = false;
      }
      return task;
    });
    updateTaskList(newTaskList);
  };

  const deleteTask = id => {
    let newTaskList = [...taskList];
    newTaskList = newTaskList.filter(task => {
      if (task.id !== id) return task;
    });
    updateTaskList(newTaskList);
  };

  const clearTaskList = () => {
    localStorage.setItem("ITEM", JSON.stringify([]));
    setTaskList("");
  };

  return (
    <Todocontext.Provider value={{ clearTaskList, deleteTask, completedTask, updateTask, task, handleSubmit, taskList }}>
      <div className='container'>
        <AdditemForm />
        <Todoitems />
      </div>
    </Todocontext.Provider>
  );
}
