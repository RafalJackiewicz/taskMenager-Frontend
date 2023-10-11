import React, { useEffect, useState } from "react";

import "./Main.css";
import Task from "../../components/Task/Task";
import { Outlet } from "react-router";

const Main = (props) => {
  const { tasks, getData } = props;

  return (
    <div className="tasks-box">
      {tasks.map((e) => (
        <Task
          key={e.id}
          idTask={e.id}
          name={e.title}
          isCompleted={e.isCompleted}
          getData={getData}
        />
      ))}
      <Outlet />
    </div>
  );
};

export default Main;
