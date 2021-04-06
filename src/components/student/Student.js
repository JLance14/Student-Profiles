import { useState } from "react";
import "./style.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Tag from "components/tag/Tag";
import TagInput from "components/tag-input/TagInput";

const Student = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const [tags, setTags] = useState([]);
  function getAverageGrades(grades) {
    let total = 0;
    grades.map((grade) => {
      total += parseInt(grade);
    });
    return (total / grades.length).toFixed(3);
  }

  if (props) {
    const { studentInfo } = props;

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
          {tags.map((tag, key) => (
            <Tag key={key} tag={tag} />
          ))}
          <TagInput tags={tags} setTags={setTags} />
        </div>
        <div className="col-md-2">
          {showInfo ? (
            <RemoveIcon
              className="show-icon"
              onClick={() => setShowInfo(!showInfo)}
            />
          ) : (
            <AddIcon
              className="show-icon"
              onClick={() => setShowInfo(!showInfo)}
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
