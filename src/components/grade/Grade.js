const Grade = (props) => {
  const { index, grade } = props;

  return <h4>{`Test ${index}: ${grade}`}</h4>;
};

export default Grade;
