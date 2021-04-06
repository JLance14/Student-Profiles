import "./style.css";
import { useState } from "react";

const TagInput = (props) => {
  const { tags, setTags, studentInfo } = props;
  const [tagName, setTagName] = useState("");

  let updateTagName = (e) => {
    setTagName(e.target.value);
  };

  let addTag = () => {
    let updatedTags = [];
    if (tags) {
      studentInfo.tags.push(tagName);
      updatedTags = [...tags, tagName];
    } else {
      studentInfo.tags = [tagName];
      updatedTags = [tagName];
    }

    setTags(updatedTags);
    setTagName("");
  };

  return (
    <div className="input-group tag-input-group">
      <input
        value={tagName}
        className="form-control tag-input"
        type="text"
        onBlur={addTag}
        onChange={updateTagName}
        placeholder="Add a tag"
      />
      <span className="input-group-btn"></span>
    </div>
  );
};

export default TagInput;
