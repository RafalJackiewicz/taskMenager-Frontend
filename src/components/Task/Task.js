import React, { useState } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Task = (props) => {
  const isTaskCompleted = props.isCompleted
    ? "name-task completed"
    : "name-task";
  const [checkboxChecked, setCheckboxChecked] = useState(props.isCompleted);

  const handleChecked = (e) => {
    console.log(e);
    console.log("cos");
    setCheckboxChecked(!checkboxChecked);
  };

  const editTitleOfTask = (e) => {
    console.log(props.name);
    // <Link to="edit-task" />;
  };
  return (
    <div className="one-task">
      <input
        type="checkbox"
        className="checkbox"
        checked={checkboxChecked}
        onChange={handleChecked}
      />
      <h3 className={isTaskCompleted}>{props.name}</h3>

      <span className="edit-icon" onClick={editTitleOfTask}>
        {" "}
        <Link to={`/edit-task/${props.name}`}>
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </span>

      <span className="trash-icon">
        {" "}
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default Task;
