import Grade from "components/grade/Grade";

const GradesList = (props) => {
  const { grades } = props;
  return (
    <div className="grades-list">
      {grades.map((grade, key) => (
        <Grade key={key} index={key + 1} grade={grade} />
      ))}
    </div>
  );
};

export default GradesList;
