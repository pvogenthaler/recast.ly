var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&key=' + options.key + '&q=' 
    + options.query + '&maxResults=' + options.max,
    type: 'GET',
    // key: options.key,
    // q: options.query,
    // maxResults: options.max,
    // dataType: 'jsonp',

    // videoEmbeddable: true,
    success: function(data) {
      console.log('IT WORKED');
      console.log(data.items);
      callback(data.items);
    },
    error: function(data) {
      console.log(':(');
    }
  });




};







window.searchYouTube = searchYouTube;
