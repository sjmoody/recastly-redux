import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

class SearchContainer extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  //
  const mapStateToProps = (state) => ({ search: state.value });

  // action: handleSearchChange
  const mapDispatchToProps = (state) => ({ handleSearchInputChange: handleSearchChange });

  render() {
      return <Search q={this.state.value} />;
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);


//function connect(mapStateToProps?, mapDispatchToProps?)




// Search.props

// connect( ,mapDispatchToProps)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSearchInputChange: () => dispatch(handleSearchChange)
//   }
// }

// const mapStateToProps = (state) => {
// mapStateToProps?: (state, ownProps?) => Object
// }

// handleSearchInputChange(e) {
//   this.props.getYouTubeVideos(e.target.value);
//   this.setState({
//     value: e.target.value
//   });
// }



