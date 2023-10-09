import React, { useEffect } from "react";
import { useState } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const param = useParams();
  const nameTask = param.hasOwnProperty("id") ? param.id : "";
  const [task, setTask] = useState(nameTask);
  const titleOfLabel = props.editing
    ? "Name for editing task"
    : "Name for new task";
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

  // const backToMain = () => {
  //   //nic nie robi to
  //   console.log("klinieto x");
  // };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:3100/add-task", {
        method: "POST",
        body: JSON.stringify({ title: task }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const res = await data.json();
      navigate("/");
    } catch {
      console.log("wystąpił bład");
    }
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
