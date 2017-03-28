import $ from 'jquery'

export function queryMovies (input){
  let searchedMovie =  $('input').val()
  let url = 'http://www.omdbapi.com/?s=' + searchedMovie

  return $.getJSON(url).then(function(searchResults){
    return searchResults["Search"]
  } )
}
