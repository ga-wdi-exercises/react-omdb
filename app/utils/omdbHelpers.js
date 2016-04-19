function queryOmdb (keyword) {
  var keyword = keyword.replace(/\s/, "+");
  var url = "http://www.omdbapi.com/?s=" + keyword;
  var results = $.getJSON(url).then(function(response){
    return response["Search"]
  })
  return results;
}

module.exports = {
  queryOmdb: queryOmdb
}
