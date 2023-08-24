import "./App.css";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
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
