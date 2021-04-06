import "./style.css";
import Student from "components/student/Student";

const StudentsList = (props) => {
  const { students, nameSearch, tagSearch } = props;
  const allStudents = students.students;
  const hasStudents = allStudents != null;
  const hasNameSearchCriteria = nameSearch != "";
  const hasTagSearchCriteria = tagSearch != "";
  const hasSearchCriteria = hasNameSearchCriteria || hasTagSearchCriteria;

  let showAllStudents = () => {
    return (
      <div>
        {allStudents.map((student, key) => (
          <Student key={key} studentInfo={student} />
        ))}
      </div>
    );
  };

  let filterByName = (unfilteredStudents) => {
    let filteredStudents = unfilteredStudents.filter((student) => {
      let studentIsCorresponding =
        student.firstName.toUpperCase().includes(nameSearch.toUpperCase()) ||
        student.lastName.toUpperCase().includes(nameSearch.toUpperCase());

      return studentIsCorresponding;
    });

    return filteredStudents;
  };

  let filterByTag = (unfilteredStudents) => {
    let filteredStudents = unfilteredStudents.filter((student) => {
      let studentTags = student.tags;
      let correspondingTags = [];

      if (studentTags) {
        correspondingTags = studentTags.filter((studentTag) => {
          let isCorrespondingTag = studentTag
            .toUpperCase()
            .includes(tagSearch.toUpperCase());

          return isCorrespondingTag;
        });
      }
      return correspondingTags.length > 0;
    });

    return filteredStudents;
  };

  let showFilteredStudents = () => {
    let filteredStudents = allStudents;

    if (hasNameSearchCriteria) {
      filteredStudents = filterByName(allStudents);
    }

    if (hasTagSearchCriteria) {
      filteredStudents = filterByTag(filteredStudents);
    }

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
