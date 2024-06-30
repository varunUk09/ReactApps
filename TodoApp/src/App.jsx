import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import Context, { TodoContext } from "./Components/MyContext";
import { useState, useEffect } from "react";
import getTasks, { storeTasks } from "./db";
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState(getTasks());
  useEffect(
    function () {
      console.log("Todos : ", todos);
      storeTasks(todos);
    },
    [todos]
  );
  const deleteTodo = id => {
    setTodo(function (oldValues) {
      return oldValues.filter(item => item.id !== id);
    });
  };
  const isEditingTodo = id => {
    setTodo(function (oldValues) {
      return oldValues.map(function (item) {
        if (item.id === id) {
          item.isEditing = !item.isEditing;
        }
        return item;
      });
    });
  };
  const isCompletedTodo = id => {
    setTodo(function (oldValues) {
      return oldValues.map(function (item) {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    });
  };
  const addTask = e => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodo(function (oldValues) {
        setTask("");
        return [
          ...oldValues,
          {
            id: Date.now(),
            task: task,
            isEditing: false,
            isCompleted: false,
          },
        ];
      });
    }
  };
  const updateTask = (id, updatedValue) => {
    setTodo(function (oldValues) {
      return oldValues.map(function (item) {
        if (item.id === id) {
          item.task = updatedValue;
          item.isEditing = !item.isEditing;
        }
        return item;
      });
    });
  };
  return (
    <div className='TodoWrapper'>
      <Context.Provider value={{ task, setTask, addTask }}>
        <TodoForm />
        <TodoContext.Provider value={{ todos, deleteTodo, isEditingTodo, isCompletedTodo, updateTask }}>
          <Todos />
        </TodoContext.Provider>
      </Context.Provider>
    </div>
  );
}

export default App;
