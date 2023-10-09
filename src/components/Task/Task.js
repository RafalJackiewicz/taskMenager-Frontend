import React, { useState } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Task = (props) => {
  const isTaskCompleted = props.isCompleted
    ? "name-task completed"
    : "name-task";
  const [checkboxChecked, setCheckboxChecked] = useState(props.isCompleted);
  const { idTask, name, isCompleted } = props;
  const navigate = useNavigate();

  const handleChecked = (e) => {
    console.log(idTask);
    console.log(e.target);
    setCheckboxChecked(!checkboxChecked);
  };

  const editTitleOfTask = () => {
    console.log(props.name);
    // <Link to="edit-task" />;
  };

  const handleDeleteTask = async () => {
    console.log("klik");
    try {
      await fetch("http://localhost:3100/delete", {
        method: "DELETE",
        body: JSON.stringify({ id: idTask }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // navigate("/");
      window.location.reload();
    } catch (e) {
      console.log("wystąpił bład");
    }
    console.log(`Usun task o nazwie: ${name} i id: ${idTask}`);
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

      <span className="trash-icon" onClick={handleDeleteTask}>
        {" "}
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default Task;
