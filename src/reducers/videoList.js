import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

//

var videoListReducer = (state = exampleVideoData, action) => {
  //TODO: define a reducer for the videoList field of our state.

  console.log('a', action);
  console.log('state', state);

  if (action && action.type === 'CHANGE_VIDEO_LIST') {
    newState.videos = action.videos;
    currentVideo = action.videos[0];
    const newState = {
      videos: action.videos,
      value: state.value,
      currentVideo: action.videos[0]
    };

  } else {
    return state;
  }

  return newState;

};

export default videoListReducer;
