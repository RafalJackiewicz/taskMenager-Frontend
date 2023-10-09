import "./App.css";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3100/");
      const data = await res.data.data;
      console.log(data);
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getData, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main tasks={tasks} getData={getData} />}>
          <Route path="/add-task" element={<Form editing={false} />}>
            {" "}
          </Route>
          <Route path="edit-task/:id" element={<Form editing={true} />}>
            {" "}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
