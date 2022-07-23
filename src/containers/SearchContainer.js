import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import React from 'react';

// class SearchContainer extends React.Component {

//   componentDidMount() {
//   }

//   render() {
//     return (
//       <Search />
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     value: state.value
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);



const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleSearchChange(q))
  };
};



var searchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default searchContainer;
