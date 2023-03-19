import "./Edit.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Edit = ({ todos, onRemoveTodo, onToggleComplete }) => {
  const handleDelete = (id) => {
    onRemoveTodo(id);
  };

  const handleCheckboxChange = (id) => {
    onToggleComplete(id);
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12" id="todosContainer">
            <h1 className="todos-heading">Edit Tasks</h1>
            <div />

            {todos.length > 0 ? (
              <ul className="col-12 row todo-items-container">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="todo-item-container col-md-6  d-flex flex-row "
                  >
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleCheckboxChange(todo.id)}
                    />
                    <div className="label-container d-flex flex-row justify-content-between">
                      <p className="task-name">{todo.text}</p>
                      <div className="d-flex flex-row align-items-center">
                        <p className="date-text">{todo.date}</p>

                        <FontAwesomeIcon
                          icon={faTrash}
                          onClick={() => handleDelete(todo.id)}
                          className="delete-icon"
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-tasks col-12">
                <p className="no-tasks-text">No tasks to Edit ,create one</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
