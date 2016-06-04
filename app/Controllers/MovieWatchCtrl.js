"use strict";
app.controller("MovieWatchCtrl", function($scope, $routeParams, movieStorage) {
var postNewMovie = function(newMovie) {
  return $q(function(resolve, reject){
    $http.post(
        firebaseURL + "movie-scenesters.json",
        JSON.stringify({
          poster: newMovie.poster,
          title: newMovie.title,
          year: newMovie.year,
          rating: newMovie.rating
          uid: user.id
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          });
  });
}; 
}