import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = (state = {videoList: [], video: null}, action) => {
  const reducerFunc = combineReducers({currentVideo, videoList});
  return reducerFunc(state, action);
};

export default rootReducer;
