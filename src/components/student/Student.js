import { useState } from "react";
import "./style.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TagsList from "components/tags-list/TagsList";
import TagInput from "components/tag-input/TagInput";
import GradesList from "components/grades-list/GradesList";

const Student = (props) => {
  const { studentInfo } = props;
  const [showGrades, setShowGrades] = useState(false);
  const [tags, setTags] = useState(studentInfo.tags);
  function getAverageGrades(grades) {
    let total = 0;
    grades.map((grade) => {
      total += parseInt(grade);
    });
    return (total / grades.length).toFixed(3);
  }

  if (props) {
    let studentAverage = getAverageGrades(studentInfo.grades);
    return (
      <div className="row student">
        <div className="col-md-2 avatar">
          <img src={studentInfo.pic} alt="student avatar" height="500%" />
        </div>
        <div className="col-md-8">
          <h3 className="student-name">
            {studentInfo.firstName.toUpperCase()}{" "}
            {studentInfo.lastName.toUpperCase()}
          </h3>
          <h4>{studentInfo.email}</h4>
          <h4>Company: {studentInfo.company}</h4>
          <h4>Skill: {studentInfo.skill}</h4>
          <h4>Average: {studentAverage}%</h4>
          {showGrades && <GradesList grades={studentInfo.grades} />}
          <TagsList tags={studentInfo.tags} />
          <TagInput tags={tags} setTags={setTags} studentInfo={studentInfo} />
        </div>
        <div className="col-md-2 align-top">
          {showGrades ? (
            <RemoveIcon
              className="show-icon"
              onClick={() => setShowGrades(!showGrades)}
            />
          ) : (
            <AddIcon
              className="show-icon"
              onClick={() => setShowGrades(!showGrades)}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <h4>No students</h4>;
  }
};

export default Student;
