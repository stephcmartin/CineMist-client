const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onMakeMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('Make Movie button working')
  console.log('our data is ', data)
  api.makeMovie(data)
    .then(ui.MakeMovieSuccess)
    .catch(ui.MakeMovieFailure)
}

const onGetMovies = function (event) {
  event.preventDefault()
  api.getMovies()
    .then(ui.getMoviesSuccess)
    .catch(ui.getMoviesFailure)
}

// const onDeleteMovie = function (event) {
//   event.preventDefault()
//   api.deleteMovies()
//     .then(ui.deleteMovies)
//     // .catch(ui.deleteMoviesFailure)
// }

const addHandlers = function () {
  $('#make-movie').on('submit', onMakeMovie)
  $('#get-movies').on('submit', onGetMovies)
}

module.exports = {
  addHandlers
}