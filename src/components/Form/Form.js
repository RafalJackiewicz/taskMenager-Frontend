import React, { useEffect } from "react";
import { useState } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const oldTaskName = useParams();
  const nameTask = oldTaskName.hasOwnProperty("taskName")
    ? oldTaskName.taskName
    : "";
  const [task, setTask] = useState(nameTask);
  const { editing, getData } = props;
  const idTask = useLocation();
  const titleOfLabel = editing ? "Name for editing task" : "Name for new task";
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      if (editing) {
        await axios.patch("http://localhost:3100/edit-task", {
          id: idTask.state.idTask,
          title: task,
        });
      } else {
        await axios.post("http://localhost:3100/add-task", { title: task });
      }
      navigate("/");
      getData();
    } catch {
      console.log("wystąpił bład");
    }

    // try {
    //   await fetch("http://localhost:3100/add-task", {
    //     method: "POST",
    //     body: JSON.stringify({ title: task }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   navigate("/");
    //   getData();
    // } catch {
    //   console.log("wystąpił bład");
    // }
  };

  return (
    <div>
      <div className="hidden-tasks">
        <div className="wrapper">
          <Link to="/">
            <span className="close-icon">
              {" "}
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </Link>

          <form action="POST" className="form-box" onSubmit={submitForm}>
            <div className="input-box">
              <input
                type="text"
                required
                value={String(task)}
                onChange={handleChange}
              />
              <label htmlFor="">{titleOfLabel}</label>
              <p className="input-warning"></p>
              <button className="btn-confirm">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
