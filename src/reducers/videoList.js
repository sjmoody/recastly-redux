import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

//

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.

  console.log('a', action);
  console.log('state', state);

  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }

};

export default videoListReducer;
