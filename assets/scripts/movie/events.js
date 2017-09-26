const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onMakeMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('our make movie data is ', data)
  api.makeMovie(data)
    .then(ui.makeMovieSuccess)
    .catch(ui.makeMovieFailure)
}

const onGetMovies = function (event) {
  event.preventDefault()
  api.getMovies()
    .then(ui.getMoviesSuccess)
    .catch(ui.getMoviesFailure)
}

const onHideMovie = function (event) {
  event.preventDefault()
  ui.hideMovie()
}

const addHandlers = function () {
  $('#make-movie').on('submit', onMakeMovie)
  $('#get-movies').on('submit', onGetMovies)
  $('#hide-movies').on('submit', onHideMovie)
}

module.exports = {
  addHandlers
}
