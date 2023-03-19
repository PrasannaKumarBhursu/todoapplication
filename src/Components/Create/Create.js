import "./Create.css";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ todos, onAddTodo }) => {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: searchValue,
      completed: false,
      date: selectedDate,
    };
    onAddTodo(newTodo);
    setSearchValue("");
    setSelectedDate("");
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className="todos-bg-container" onSubmit={handleAddTodo}>
      <div className="container">
        <div className="row">
          <h1 className="todos-heading col-12">Add Task</h1>
          <div className="col-12">
            <h1 className="create-task-heading">
              Task <span className="create-task-heading-subpart">Name</span>
            </h1>
            <input
              type="text"
              value={searchValue}
              className="todo-user-input"
              placeholder="What Next to be done?"
              ref={inputRef}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <label className="create-date" htmlFor="my-date-input">
              Select a date:
            </label>
            <br />
            <input
              className="input-date"
              type="date"
              id="my-date-input"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary add-todo-button" type="submit">
              Add
            </button>
          </div>
          <h1 className="todo-items-heading col-12">
            My <span className="todo-items-heading-subpart">Tasks</span>
          </h1>

          <ul className="col-12 row todo-items-container">
            {todos.map((todo) => (
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
        </div>
      </div>
    </form>
  );
};

export default Create;
