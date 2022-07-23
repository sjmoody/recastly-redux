import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

// Should have a prop called handleVideoListEntryTitleClick
// Should have a prop called videos connected to the videoList in the store
// Should be created using the React-Redux connect method


//function connect(mapStateToProps?, mapDispatchToProps?)


const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

export default VideoListContainer;
