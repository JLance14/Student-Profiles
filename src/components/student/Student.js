import "./style.css";

const Student = (props) => {
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
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={studentInfo.pic} alt="student avatar" />
          </div>
          <div className="offset-4 col-8">
            <h3 className="student-name">
              {studentInfo.firstName.toUpperCase()}{" "}
              {studentInfo.lastName.toUpperCase()}
            </h3>
            <h4>{studentInfo.email}</h4>
            <h4>Company: {studentInfo.company}</h4>
            <h4>Skill: {studentInfo.skill}</h4>
            <h4>Average: {studentAverage}%</h4>
          </div>
        </div>
      </div>
    );
  } else {
    return <h4>No students</h4>;
  }
};

export default Student;
