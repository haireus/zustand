import React from "react";
import "./App.css";
import { CourseForm } from "./CourseForm";
import { CourseList } from "./CourseList";
import { ListPost } from "./ListPost";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        {" "}
        My Course list
      </h1>
      <CourseForm />
      <CourseList />
      <ListPost />
    </div>
  );
}

export default App;
