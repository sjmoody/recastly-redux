import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import SearchContainer from '../containers/SearchContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import VideoListContainer from '../containers/VideoListContainer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({currentVideo: video});
  }

  getYouTubeVideos(query) {
    console.log(this.props.API_KEY);
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
