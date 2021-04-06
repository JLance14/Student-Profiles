import "./style.css";
import Student from "components/student/Student";

const StudentsList = (props) => {
  const { students, nameSearch } = props;
  const hasStudents = students.students;
  const hasSearchCriteria = nameSearch != "";
  const searchName = nameSearch.toUpperCase();

  let showAllStudents = () => {
    return (
      <div>
        {students.students.map((student, key) => (
          <Student key={key} studentInfo={student} />
        ))}
      </div>
    );
  };

  let showFilteredStudents = () => {
    let filteredStudents = students.students.filter((student) => {
      let studentIsCorresponding =
        student.firstName.toUpperCase().includes(searchName) ||
        student.lastName.toUpperCase().includes(searchName);

      return studentIsCorresponding;
    });

    return filteredStudents.map((student) => <Student studentInfo={student} />);
  };

  if (hasStudents) {
    if (hasSearchCriteria) {
      return showFilteredStudents();
    } else {
      return showAllStudents();
    }
  }

  return <div>No students available</div>;
};

export default StudentsList;
