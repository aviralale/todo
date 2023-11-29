import React, { useState, useEffect } from "react";
import './TodoContainer.css'
import { toast } from "sonner";

const DeleteButton = () => {
  return (
    <svg className="deletebtn" viewBox="0 0 24 24" height="2em" width="2em">
      <path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m5 5h-2.5l-1-1h-3l-1 1H7v2h10V7M9 18h6a1 1 0 001-1v-7H8v7a1 1 0 001 1z" />
    </svg>
  );
};
export default function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");
  const addTodos = (e) => {
    e.preventDefault();
    if (newTodos.trim() !== "") {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, { id: Date.now(), text: newTodos }];
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setNewTodos("");
        return updatedTodos;
    });
    toast.success('Task has been added');
}
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos",JSON.stringify(updatedTodos));
    toast.error('Task has been removed');
  };
  
  const handleOnChange = (e) => {
    setNewTodos(e.target.value);
  };
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <div>
      <div className="mt-10 todo-container flex flex-col ">
        <form className="flex gap-1 flex-wrap">
          <input
            type="text"
            name="task"
            id="task"
            className="input border border-black h-10"
            value={newTodos}
            onChange={handleOnChange}
          />
          <button type="submit" className="button" onClick={addTodos}>
            Add Task
          </button>
        </form>
        <div>
          <ul>
            <h2 className="text-2xl text-center my-2">Tasks</h2>
            {todos.map((todo) => {
              return (
                <li className="flex todo justify-between" key={todo.id}>
                  <span>{todo.text}</span>
                  <button onClick={ ()=>removeTodo(todo.id)}>
                    <DeleteButton />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
