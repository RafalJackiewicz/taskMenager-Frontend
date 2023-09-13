import React, { useEffect, useState } from "react";

import "./Main.css";
import Task from "../../components/Task/Task";
import { Outlet } from "react-router";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:3100/")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, [tasks]);

  return (
    <div className="tasks-box">
      {tasks.map((e) => (
        <Task key={e.id} name={e.title} isCompleted={e.isCompleted} />
      ))}
      <Outlet />
    </div>
  );
};

export default Main;
