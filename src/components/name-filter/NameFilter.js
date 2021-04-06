import "./style.css";

const NameFilter = (props) => {
  const { nameSearch, setNameSearch } = props;

  let updateNameSearch = (e) => {
    setNameSearch(e.target.value);
  };

  return (
    <div className="row text-center">
      <div className="col-lg-12">
        <div className="input-group filter-input-group">
          <input
            name="searchtext"
            value={nameSearch}
            className="form-control filter-search"
            type="text"
            onChange={updateNameSearch}
            placeholder="Seach by name"
          />
          <span className="input-group-btn"></span>
        </div>
      </div>
    </div>
  );
};

export default NameFilter;
