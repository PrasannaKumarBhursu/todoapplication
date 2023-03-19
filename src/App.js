import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.js";
import Create from "./Components/Create/Create.js";
import Edit from "./Components/Edit/Edit";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    console.log("remove", id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    console.log("hello", id);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/create"
          element={
            <Create
              todos={todos}
              onAddTodo={handleAddTodo}
              onToggleComplete={handleToggleComplete}
            />
          }
        />
        <Route
          exact
          path="/edit"
          element={
            <Edit
              onRemoveTodo={handleRemoveTodo}
              todos={todos}
              onToggleComplete={handleToggleComplete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
