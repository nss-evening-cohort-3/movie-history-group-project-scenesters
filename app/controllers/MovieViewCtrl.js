app.controller("MovieViewCtrl", function($scope, $routeParams, movieStorage){
  $scope.movies=[];
  $scope.selectedMovie = {};
  console.log("MovieViewCtrl");
  movieStorage.getMovieList().then(function(movieCollection){
    console.log("movieCollection from promise", movieCollection);
    $scope.movies = movieCollection;
    console.log("First:", $scope.movies[0][1].Title);
    $scope.selectedMovie = $scope.movies.filter(function(movie){
      return movie.id === $routeParams.itemId;
    })[0];
  })
});