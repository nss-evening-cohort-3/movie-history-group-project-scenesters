app.controller("MovieListCtrl", function($scope, $routeParams, movieStorage){
  $scope.movies=[];
  $scope.selectedMovie = {};

  $scope.searchMovieDatabase = function() {
    console.log($scope.databaseSearch); 
     movieStorage.getMovieList($scope.databaseSearch).then(function(movieCollection){
    console.log("movieCollection from promise", movieCollection);
    $scope.movies = movieCollection;
    console.log("First:", $scope.movies[0][1].Title);
    $scope.selectedMovie = $scope.movies.filter(function(movie){
      return movie.id === $routeParams.itemId;
    })[0];
  });
};
  var postNewMovie = function(newMovie) {
  return $q(function(resolve, reject){
    $http.post(
        firebaseURL + "movie-scenesters.json",
        JSON.stringify({
          poster: newMovie.poster,
          title: newMovie.title,
          year: newMovie.year,
          // rating: newMovie.rating, 
          // uid: user.id
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          });
  });
}; 
});



