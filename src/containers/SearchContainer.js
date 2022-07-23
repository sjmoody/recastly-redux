import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};

var searchContainer = connect(null, mapDispatchToProps)(Search);

export default searchContainer;
