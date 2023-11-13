import React, { useState } from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Task = (props) => {
  const { idTask, name, isCompleted, getData } = props;
  const isTaskCompleted = isCompleted ? "name-task completed" : "name-task";
  const [checkboxChecked, setCheckboxChecked] = useState(isCompleted);

  // const navigate = useNavigate();
  const handleChecked = async (e) => {
    setCheckboxChecked(!checkboxChecked);
    try {
      await fetch("http://localhost:3100/toggle", {
        method: "PATCH",
        body: JSON.stringify({ id: idTask, isCompleted: checkboxChecked }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log("wystąpił bład");
    }

    // console.log(idTask, checkboxChecked);
    console.log(e.target);

    getData();
  };

  const handleDeleteTask = async () => {
    try {
      await fetch("http://localhost:3100/delete", {
        method: "DELETE",
        body: JSON.stringify({ id: idTask }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      getData();
    } catch (err) {
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

      <span className="edit-icon">
        {" "}
        <Link to={`/edit-task/${props.name}`} state={{ idTask: idTask }}>
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
