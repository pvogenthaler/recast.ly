var searchDetails = (callback, VIDEO_ID) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + VIDEO_ID + '&key=' + window.YOUTUBE_API_KEY,
    type: 'GET',
    // data: {
      // type: 'video',
      // part: 'snippet',
      // key: options.key,
      // q: options.query,
      // maxResults: options.max,
    // },
    success: function(data) {
      console.log('IT WORKED');
      console.log(data);
      console.log(VIDEO_ID);
      // console.log(data.items);
      callback(data);
    },
    error: function(data) {
      console.log(':(');
    }
  });
};

window.searchDetails = searchDetails;

// searchDetails({key: window.YOUTUBE_API_KEY});
// https://www.googleapis.com/youtube/v3/videos?part=snippet&id={VIDEO_ID}&key={YOUR_API_KEY}
