const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)
const showMoviesTemplate = require('../templates/movie-listing.handlebars')

const makeMovieSuccess = function (data) {
  // console.log('You have Successfully added movie to your list')
  $('#message').text('You have successfully added movie to your list')
  $('#make-movie').trigger('reset')
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(makeMovieFailure)
}
const makeMovieFailure = function () {
  console.log('Add Movie failure')
  $('#message').text('You have failed to add a movie to your list')
}

const getMoviesSuccess = function (data) {
  console.log('List of movies attained')
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#list').empty()
  $('#list').append(showMoviesHtml)
  $('.delete-movie').on('click', onDeleteMovie)
  $('.edit-movie').on('submit', onEditMovie)
  $('.edit-movie-button').on('click', onEditClick)
  $('#to-watch').attr('disabled', 'disabled')
  $('.edit-movie').trigger('reset')
}

const getMoviesFailure = function () {
  console.error('error getting movies')
}

const onDeleteMovie = function () {
  console.log('You have Successfully deleted your movie')
  $('#message').text('You have successfully deleted the movie on your to-watch list')
  const movieId = $(this).parent().parent().data('id')
  console.log('this will delete movie # ' + movieId)
  $(this).parent().parent().remove()
  api.deleteMovie(movieId)
    .then(deleteMovieSuccess)
    .catch(deleteMovieFailure)
}

const deleteMovieSuccess = function (data) {
  console.log('You have succesfully deleted movie')
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(makeMovieFailure)
}
const deleteMovieFailure = function () {
  console.log('delete wine failure')
}

const onEditMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  const movieId = $(this).parent().data('id')
  console.log('Edit movie data is ' + data)
  api.editMovie(data, movieId)
    .then(editMovieSuccess)
    .catch(editMovieFailure)
}

const editMovieSuccess = function (data) {
  console.log('You have Successfully edited movie. Data is: ' + data)
  $('.edit-movie').trigger('reset')
  api.getMovies()
    .then(getMoviesSuccess)
    .catch(makeMovieFailure)
}

const editMovieFailure = function () {
  $('#message').text('You have failed to edit movie')
}

const onEditClick = function (event) {
  const movieId = $(this).parent().parent().data('id')
  event.preventDefault()
  console.log('you clicked edit' + movieId)
  $('#edit-movie-' + movieId).toggle()
}
const hideMovie = function () {
  $('#list').empty()
  $('#to-watch').attr('disabled', false)
}
module.exports = {
  makeMovieSuccess,
  makeMovieFailure,
  getMoviesFailure,
  getMoviesSuccess,
  onDeleteMovie,
  onEditMovie,
  onEditClick,
  hideMovie
}
