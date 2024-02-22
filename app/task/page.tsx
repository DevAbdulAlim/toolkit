"use client";
import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

interface todo {
  id: number;
  text: string;
  complete: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [idCounter, setIdCounter] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;

    const newTodo: todo = {
      id: idCounter,
      text: todoInput,
      complete: false,
    };

    setTodos([...todos, newTodo]);
    setTodoInput("");
    setIdCounter(idCounter + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  console.log(todos);

  return (
    <div className="max-w-lg mx-auto px-3 py-8">
      <div className="flex space-x-3 items-center justify-center py-8 text-green-600">
        <span className="text-4xl font-fold">
          <BiTask />
        </span>
        <h1 className="text-4xl font-bold  ">Todo List</h1>
      </div>
      <div className=" rounded-lg">
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            type="text"
            className=" focus:outline-none  flex-grow mr-4 py-2 px-4 rounded-md"
            name="todos"
            value={todoInput}
            maxLength={40}
            onChange={handleChange}
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            aria-label="add todo"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Add Task
          </button>
        </form>

        <div>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between group my-3  hover:cursor-pointer   hover:bg-green-0 relative "
            >
              <div
                className={`${
                  todo.complete ? "bg-green-50" : "bg-white"
                } flex grow rounded-md  items-center`}
                onClick={() => handleComplete(todo.id)}
              >
                {/* Checkmark icon */}
                <span
                  className={`${
                    todo.complete ? "text-green-500" : "text-gray-300"
                  } text-2xl  p-2`}
                >
                  <FaCheckCircle />
                </span>
                {/* Todo text */}
                <span
                  className={`text-lg p-2 ${
                    todo.complete ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <div className="absolute top-0 right-0 h-full">
                <button
                  type="button"
                  aria-label="delete todo"
                  className="text-red-500 h-full font-bold px-3 hidden group-hover:flex items-center justify-center "
                  onClick={() => handleDelete(todo.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
