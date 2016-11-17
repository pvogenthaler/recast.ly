var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    // key: options.key,
    // q: options.query,
    // maxResults: options.max,
    // dataType: 'jsonp',

    videoEmbeddable: true,
    success: function() {
      console.log('IT WORKED');
      callback();
    },
    error: function() {
      console.log(':(');
      console.log(options);
    }
  });




};







window.searchYouTube = searchYouTube;
