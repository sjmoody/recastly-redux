import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  var func = function(q) {
    // console.log("using key to search: ", YOUTUBE_API_KEY);
    searchYouTube({YOUTUBE_API_KEY, q}, changeVideoList);
  };

  return func;

};

export default handleVideoSearch;
