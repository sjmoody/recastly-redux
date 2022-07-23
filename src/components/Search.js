import React from 'react';


var Search = ({value, handleSearchInputChange}) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={handleSearchInputChange}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;
