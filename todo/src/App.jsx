import "./App.css";
import { useState } from "react";
import Task from "./Task";

function App() {
  const [newTaskName, setNewTaskName] = useState("");
  const [tasks, setTasks] = useState(reteriveTasks() || []);
  const handleNewTask = event => {
    setNewTaskName(event.target.value);
  };
  const handleSetTask = () => {
    if (newTaskName.trim() !== "") {
      const task = {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        taskName: newTaskName.trim(),
        completed: false,
      };
      const newTaskList = [...tasks, task];
      storeTasks(newTaskList);
      setTasks(newTaskList);
      setNewTaskName("");
    } else {
      console.log("Enter task name first!");
    }
  };
  const deleteTask = id => {
    const newTaskList = tasks.filter(tsk => tsk.id !== id);
    storeTasks(newTaskList);
    setTasks(newTaskList);
  };
  const completedTask = id => {
    const newTaskList = tasks.map(tsk => {
      if (tsk.id === id) {
        return { ...tsk, completed: true };
      } else {
        return tsk;
      }
    });
    storeTasks(newTaskList);
    setTasks(newTaskList);
  };
  return (
    <>
      <main>
        <form
          className='addTaskWrapper'
          onSubmit={e => {
            e.preventDefault();
          }}>
          <input type='text' onChange={handleNewTask} value={newTaskName} />
          <button onClick={handleSetTask}>
            <i className='fa-solid fa-plus' style={{ color: "#ffffff" }}></i>
          </button>
        </form>
        <div className='Tasks'>
          {tasks.map(task => {
            return <Task key={task.id} taskid={task.id} taskName={task.taskName} taskcompleted={task.completed} deleteTask={deleteTask} completedTask={completedTask} />;
          })}
        </div>
      </main>
    </>
  );
}

const storeTasks = tasks => {
  sessionStorage.setItem("todolist", JSON.stringify(tasks));
};

const reteriveTasks = () => {
  const tasks = sessionStorage.getItem("todolist");
  if (tasks !== null) {
    return JSON.parse(tasks);
  } else {
    return null;
  }
};

export default App;
