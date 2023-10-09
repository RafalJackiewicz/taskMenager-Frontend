import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Main.css";
import Task from "../../components/Task/Task";
import { Outlet } from "react-router";

const Main = () => {
  const [tasks, setTasks] = useState([]);

  const fetchUserData = () => {
    try {
      const res = axios
        .get(process.env.REACT_APP_SERVEURL)
        .then((data) => setTasks(data.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="tasks-box">
      {tasks.map((e) => (
        <Task
          key={e.id}
          idTask={e.id}
          name={e.title}
          isCompleted={e.isCompleted}
        />
      ))}
      <Outlet />
    </div>
  );
};

export default Main;
