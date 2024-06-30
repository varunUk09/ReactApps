import React, { useContext } from "react";
import { TodoContext } from "./MyContext";
import Todo from "./Todo";
import EditTodo from "./EditTodo";

export default function Todos() {
  const { todos } = useContext(TodoContext);
  return (
    <ul className='todosItems'>
      {todos.map(function (todo) {
        if (todo.isEditing) {
          return <EditTodo key={todo.id} data={todo} />;
        } else {
          return <Todo key={todo.id} data={todo} />;
        }
      })}
    </ul>
  );
}
