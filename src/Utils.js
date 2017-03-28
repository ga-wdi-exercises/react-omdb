import $ from 'jquery';

export function queryOmdb (query) {
  // replaces space with a + so omdbapi can read/search without errors
  let searchTitle = query.replace(/\s/, "+")
  let url = 'http://omdbapi.com/?s=' + searchTitle;

  // turns results into json
  return $.getJSON(url).then(function(response){
    return response["Search"]
  });
}
