import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  var func = function(q) {
  // var searchYouTube = ({key, query, max = 5}, callback) => {
    var callback = function() {

    };
    var searchResult = searchYouTube({YOUTUBE_API_KEY, q}, callback);

  };
  return func;

};

export default handleVideoSearch;
