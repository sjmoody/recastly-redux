import React from 'react';


var Search = (props) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      // Refactor this out - value should be local in this component or pulled from container
      value={props.value}
      // Refactor this out - function should be prop passed from container
      onChange={props.handleSearchInputChange}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);


export default Search;
