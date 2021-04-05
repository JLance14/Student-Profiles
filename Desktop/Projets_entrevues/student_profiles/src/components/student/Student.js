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
      <div>
        <h4>
          {studentInfo.firstName} {studentInfo.lastName}
        </h4>
        <h4>{studentInfo.email}</h4>
        <h4>Company: {studentInfo.company}</h4>
        <h4>Skill: {studentInfo.skill}</h4>
        <h4>Average: {studentAverage}%</h4>
      </div>
    );
  } else {
    return <h4>No students</h4>;
  }
};

export default Student;
