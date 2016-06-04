app.controller("MovieListCtrl", function($scope, $routeParams, movieStorage){
  $scope.movies=[];
  $scope.selectedMovie = {};
  // console.log("MovieListCtrl");
  // movieStorage.getMovieList("Star").then(function(movieCollection){
  //   console.log("movieCollection from promise", movieCollection);
  //   $scope.movies = movieCollection;
  //   console.log("First:", $scope.movies[0][1].Title);
  //   $scope.selectedMovie = $scope.movies.filter(function(movie){
  //     return movie.id === $routeParams.itemId;
  //   })[0];
  // });
  $scope.searchMovieDatabase = function() {
    console.log($scope.databaseSearch); 
     movieStorage.getMovieList($scope.databaseSearch).then(function(movieCollection){
    console.log("movieCollection from promise", movieCollection);
    $scope.movies = movieCollection;
    console.log("First:", $scope.movies[0][1].Title);
    $scope.selectedMovie = $scope.movies.filter(function(movie){
      return movie.id === $routeParams.itemId;
    })[0];
  })
};
})