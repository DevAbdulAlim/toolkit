"use client";
import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import Timer from "./Timer";

interface todo {
  id: number;
  text: string;
  complete: boolean;
  duration: number;
}

// sort based on completion
const sortTodo = (todos: todo[]) => {
  return todos.sort((a, b) => {
    if (a.complete && !b.complete) {
      return 1;
    } else if (!a.complete && b.complete) {
      return -1;
    } else {
      return 0;
    }
  });
};

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");
  const [idCounter, setIdCounter] = useState<number>(1);
  const [activeTodo, setActiveTodo] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoInput.trim() === "") return;

    const pattern = /(.*)\b(\d+)m\b$/;
    const extractedTask = pattern.exec(todoInput);
    if (!extractedTask) {
      return;
    }

    console.log(extractedTask);

    const newTodo: todo = {
      id: idCounter,
      text: extractedTask[1],
      complete: false,
      duration: parseInt(extractedTask[2]),
    };

    setTodos(sortTodo([...todos, newTodo]));
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

    setTodos(sortTodo(updatedTodos));
  };

  const handleActive = (id: number) => {
    setActiveTodo(id);
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
              >
                {/* Checkmark icon */}
                <span
                  onClick={() => handleComplete(todo.id)}
                  className={`${
                    todo.complete ? "text-green-500" : "text-gray-300"
                  } text-2xl  p-2`}
                >
                  <FaCheckCircle />
                </span>
                {/* Todo text */}
                <span
                  className={`text-lg p-2  ${
                    todo.complete ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => handleActive(todo.id)}
                >
                  {todo.text}
                </span>
                <Timer
                  duration={todo.duration}
                  isActive={activeTodo === todo.id}
                />
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
