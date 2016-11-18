class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      value: 'cat'
    };

    window.searchYouTube({query: this.state.value, key: window.YOUTUBE_API_KEY, maxResults: 5}, 
      (data) => {
        this.setState({
          videos: data
        });
        this.setState({
          currentVideo: this.state.videos[0]
        });
      });
  }

  click(video) {
    this.setState({
      currentVideo: video
    });
  }

  searchKeystroke(event) {
    var temp = event.target;
    _.debounce(() => (
      window.searchYouTube({query: temp.value, key: window.YOUTUBE_API_KEY, maxResults: 5}, 
      (data) => {
        this.setState({
          videos: data
        });
        this.setState({
          currentVideo: this.state.videos[0]
        });
      })), 500).call();
  }

  render() {
    return (
      <div>
        <Nav search1={this.searchKeystroke.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer 
            video={this.state.currentVideo}
            />
        </div>
        <div className="col-md-5">
          <VideoList 
            videos={this.state.videos} 
            click={this.click.bind(this)} 
            />     
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
