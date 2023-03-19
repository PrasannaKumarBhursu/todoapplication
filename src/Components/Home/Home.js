import "./Home.css";

import { useState, useEffect } from "react";

const Home = (props) => {
  const [todos, setTodos] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleReset = () => {
    setSelectedDate("");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const filteredTodos = selectedDate
    ? todos.filter((todo) => todo.date <= selectedDate)
    : todos;

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Tasks to complete</h1>
          </div>

          <h5 className=" col-12 todo-items-heading">
            Filter :
            <span className="filter-text">
              ( tasks to complete before date)
            </span>{" "}
          </h5>

          <div className="col-12">
            <input
              type="date"
              className="input-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button className="btn btn-primary ml-4" onClick={handleReset}>
              Reset
            </button>
          </div>
          {todos.length > 0 ? (
            <ul className=" col-12 row todo-items-container">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className="todo-item-container col-md-6  d-flex flex-row "
                >
                  <div className="label-container d-flex flex-row justify-content-between ">
                    <p className="task-name">{todo.text}</p>
                    <p className="date-text">{todo.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-tasks col-12">
              <p className="no-tasks-text">No tasks to finish ,create one</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
