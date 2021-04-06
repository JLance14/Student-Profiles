const TagFilter = (props) => {
  const { tagSearch, setTagSearch } = props;

  let updateTagSearch = (e) => {
    setTagSearch(e.target.value);
  };

  return (
    <div className="row text-center">
      <div className="col-lg-12">
        <div className="input-group">
          <input
            name="searchtext"
            value={tagSearch}
            className="form-control name-search"
            type="text"
            onChange={updateTagSearch}
            placeholder="Seach by tag"
          />
          <span className="input-group-btn"></span>
        </div>
      </div>
    </div>
  );
};

export default TagFilter;
