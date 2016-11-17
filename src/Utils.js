import $ from 'jquery'

 export function queryOmdb (query) {
   var term = query.replace(/\s/, "+");
   var url = "http://omdbapi.com/?s=" + term;


   return $.getJSON(url).then(function(response) {
     return response["Search"]
   });
  }
