const config = require('../config')
const store = require('../store')

const makeMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMovie = function (movieId) {
  console.log(movieId)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + movieId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editMovie = function (data, movieId) {
  console.log(movieId)
  return $.ajax({
    url: config.apiOrigin + '/movies/' + movieId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  makeMovie,
  getMovies,
  deleteMovie,
  editMovie
}
