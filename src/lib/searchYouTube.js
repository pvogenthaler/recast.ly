var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      type: 'video',
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
    },
    success: function(data) {
      // console.log('IT WORKED');
      // console.log(data);
      // console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.log(':(');
    }
  });
};

window.searchYouTube = searchYouTube;