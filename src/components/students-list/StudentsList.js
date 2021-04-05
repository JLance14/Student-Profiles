import "./style.css";
import Student from "components/student/Student";

const StudentsList = (props) =>
  props && props.students && props.students.students ? (
    <div>
      {props.students.students.map((student) => (
        <Student studentInfo={student} />
      ))}
    </div>
  ) : null;

export default StudentsList;
