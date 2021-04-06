import "./style.css";

const Tag = (props) => {
  const { tag } = props;
  return <span class="badge badge-secondary tag-badges">{tag}</span>;
};

export default Tag;
