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
  console.log(data)
  console.log('List of movies attained')
  $('#list-body').show()
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
