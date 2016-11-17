// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video = {window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {window.exampleVideoData}/>
//     </div>
//   </div>
// );



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      // 2 states, search/ video list and video player
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      value: 'cat'
    };
  }
  click(video) {
    console.log('clicked');
    this.setState({
      currentVideo: video
    });
  }
  searchClick(event) {
    this.setState({
      value: event.target.value
    });
    console.log(window.searchYouTube);
    // window.searchYouTube({query: this.state.input, key: window.YOUTUBE_API_KEY, maxResults: 5}, (data) => {
    //   this.setState({videos: data});
    // });
  }
  render() {

// pass click to video list entry
    return (
      <div>
        <Nav searchClick={this.searchClick.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer 
            // video = {window.exampleVideoData[0]} 
            video={this.state.currentVideo}

            />
        </div>
        <div className="col-md-5">
          <VideoList 
            // videos={window.exampleVideoData}
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
