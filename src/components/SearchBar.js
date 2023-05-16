import { useState } from "react";
// import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="row filter-row">
      <div className="col-sm-10 col-md-8">
        <div className="top-nav-search position-relative form-focus">
          <input
            className="form-control floating"
            placeholder="&nbsp;"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <label className="focus-label">Employee ID / Employee Name</label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
