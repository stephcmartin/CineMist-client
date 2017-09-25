const api = require('./api')

const showMoviesTemplate = require('../templates/movie-listing.handlebars')

const MakeMovieSuccess = function (data) {
  console.log('You have Successfully added movie to your list')
  $('#message').text('You have successfully added movie to your list')
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
  $('.delete-movie').on('click', function () {
    console.log('You have Successfully deleted your movie')
    $('#message').text('You have successfully deleted the movie on your to-watch list')
    const movieId = $(this).parent().parent().data('id')
    console.log('this will delete movie # ' + movieId)
    console.log(movieId)
    $(this).parent().parent().remove()
    api.deleteMovie(movieId)
  })
  // $('#movie-list').hide()
}

const getMoviesFailure = function () {
  console.error('error getting movies')
}

module.exports = {
  MakeMovieSuccess,
  MakeMovieFailure,
  getMoviesFailure,
  getMoviesSuccess
}
