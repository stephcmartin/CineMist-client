const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

const showMoviesTemplate = require('../templates/movie-listing.handlebars')

const MakeMovieSuccess = function (data) {
  console.log('You have Successfully added movie to your list')
  $('#message').text('You have successfully added movie to your list')
  $('#make-movie').trigger('reset')
  console.log(data)
}
const MakeMovieFailure = function () {
  console.log('Add Movie failure')
  $('#message').text('You have failed to add a movie to your list')
}

const getMoviesSuccess = function (data) {
  console.log('List of movies attained')
  $('#message').text('Here is your to-watch list')
  const showMoviesHtml = showMoviesTemplate({ movies: data.movies })
  $('#list').append(showMoviesHtml)
  $('.delete-movie').on('click', onDeleteClick)
  $('.edit-movie').on('submit', onEditMovie)
  $('.edit-movie-click').on('click', onEditClick)
}

const onDeleteClick = function () {
  console.log('You have Successfully deleted your movie')
  $('#message').text('You have successfully deleted the movie on your to-watch list')
  const movieId = $(this).parent().parent().data('id')
  console.log('this will delete movie # ' + movieId)
  console.log(movieId)
  $(this).parent().parent().remove()
  api.deleteMovie(movieId)
}

const getMoviesFailure = function () {
  console.error('error getting movies')
}

const onEditMovie = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  const movieId = $(this).parent().data('id')
  console.log('Edit movie data is ' + data)
  api.editMovie(data, movieId)
    .then(console.log('Edit Movie Worked'))
    .catch(console.log('Edit Movie Failed'))
}
const onEditClick = function (event) {
  const movieId = $(this).parent().parent().data('id')
  event.preventDefault()
  console.log('you clicked edit' + movieId)
  $('#edit-movie-' + movieId).toggle()
}

module.exports = {
  MakeMovieSuccess,
  MakeMovieFailure,
  getMoviesFailure,
  getMoviesSuccess,
  onDeleteClick,
  onEditMovie,
  onEditClick
}
