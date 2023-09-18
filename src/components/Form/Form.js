import React from "react";
import { useState } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { redirect } from "react-router";

const Form = (props) => {
  const param = useParams();
  const nameTask = param.hasOwnProperty("id") ? param.id : "";
  const [name, setName] = useState(nameTask);
  const titleOfLabel = props.editing
    ? "Name for editing task"
    : "Name for new task";

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const backToMain = () => {
    console.log("klinieto x");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const data = await fetch("http://localhost:3100/add-task", {
        method: "POST",
        body: JSON.stringify({ title: name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await data.json();

      // window.location.href = "/";
    } catch {
      console.log("wystąpił bład");
    }

    // console.log(event.target.valus sde);
  };

  return (
    <div>
      <div className="hidden-tasks">
        <div className="wrapper">
          <Link to="/">
            <span className="close-icon" onClick={backToMain}>
              {" "}
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </Link>

          <form action="POST" className="form-box" onSubmit={submitForm}>
            <div className="input-box">
              <input
                type="text"
                required
                value={String(name)}
                onChange={handleChange}
              />
              <label htmlFor="">{titleOfLabel}</label>
              <p className="input-warning"></p>
              <button className="btn-confirm" onClick={backToMain}>
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
