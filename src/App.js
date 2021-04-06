import { useEffect, useState } from "react";
import "./App.css";
import NameFilter from "components/name-filter/NameFilter";
import TagFilter from "components/tag-filter/TagFilter";
import StudentsList from "components/students-list/StudentsList";

const App = () => {
  const [students, setStudents] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="container main-container h-25 rounded-circle dashboard">
        <NameFilter nameSearch={nameSearch} setNameSearch={setNameSearch} />
        <TagFilter tagSearch={tagSearch} setTagSearch={setTagSearch} />
        <StudentsList
          students={students}
          nameSearch={nameSearch}
          tagSearch={tagSearch}
        />
      </div>
    </div>
  );
};

export default App;
