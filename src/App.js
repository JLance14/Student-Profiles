import React, { useEffect, useState } from "react";
import "./App.css";
import StudentsList from "components/students-list/StudentsList";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="App">
      <StudentsList students={students} />
    </div>
  );
};

export default App;
