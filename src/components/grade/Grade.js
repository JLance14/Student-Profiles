import "./style.css";

const Grade = (props) => {
  const { index, grade } = props;

  return (
    <div className="grade-container">
      <p>Test {index}:</p>
      <p className="grade">{grade}%</p>
    </div>
  );
};

export default Grade;
