import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  var url = "http://omdbapi.com/?s=" + term;

  return $.getJSON(url).then(function(response) {
    return response["Search"]
  })
}
