import "./style.css";
import Tag from "components/tag/Tag";

const TagsList = (props) => {
  const { tags } = props;

  console.log("tags: ", tags);

  if (tags) {
    return (
      <div className="tags-list">
        {tags.map((tag, key) => (
          <Tag key={key} tag={tag} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default TagsList;
