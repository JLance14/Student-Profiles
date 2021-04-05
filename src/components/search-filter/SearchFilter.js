import { useState } from "react";

const SearchFilter = () => {
  const [searchInput, setSearchInput] = useState([]);

  let updateSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="row text-center">
      <div className="col-lg-12">
        <div class="input-group">
          <input
            name="searchtext"
            value={searchInput}
            className="form-control col-12"
            type="text"
            onChange={updateSearchInput}
          />
          <span class="input-group-btn"></span>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
