function queryOmdb (keyword) {
  var keyword = keyword.replace(/\s/, "+");
  var url = "http://www.omdbapi.com/?s=" + keyword;
  var results = $.getJSON(url).then(function(response){
    var movies = response["Search"].map(function(movie){
      var posterUrl;
       if (movie.Poster == "N/A"){
         posterUrl = "/app/images/imageNA.jpg";
       } else {
         posterUrl = movie.Poster;
       }
       movie.posterUrl = posterUrl;
       return movie
     })
    return movies
  })
  return results;
}

module.exports = {
  queryOmdb: queryOmdb
}
