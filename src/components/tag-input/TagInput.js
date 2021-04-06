import { useState } from "react";

const TagInput = (props) => {
  const { tags, setTags } = props;
  const [tagName, setTagName] = useState("");

  let updateTagName = (e) => {
    setTagName(e.target.value);
  };

  let addTag = () => {
    let updatedTags = [...tags, tagName];
    setTags(updatedTags);
  };
  return (
    <div className="input-group">
      <input
        value={tagName}
        className="form-control"
        type="text"
        onBlur={addTag}
        onChange={updateTagName}
        //onChange={updateNameSearch}
        placeholder="Seach by name"
      />
      <span className="input-group-btn"></span>
    </div>
  );
};

export default TagInput;
