import "./style.css";
import Student from "components/student/Student";

const StudentsList = (props) => {
  if (props && props.students && props.students.students) {
    let students = props.students.students;

    return (
      <div>
        {students.map((student) => (
          <Student studentInfo={student} />
        ))}
      </div>
    );
  } else {
    return <h3>Student unavailable</h3>;
  }
};

export default StudentsList;
