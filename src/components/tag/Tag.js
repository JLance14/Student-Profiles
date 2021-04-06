import "./style.css";

const Tag = (props) => {
  const { tag } = props;
  return <span className="badge badge-secondary tag-badges">{tag}</span>;
};

export default Tag;
