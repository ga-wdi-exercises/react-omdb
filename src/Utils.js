import $ from 'jquery'

export function queryOmbd(query) {
  var term = query.replace(/\s/, "+")
  var url = "http://omdbapi.com/?s=" + term

  return $.getJSON(url).then(res => {
    return res["Search"]
  })
}
