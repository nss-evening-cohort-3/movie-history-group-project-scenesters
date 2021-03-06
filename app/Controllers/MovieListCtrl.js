app.controller('MovieListCtrl', function($scope, $routeParams, movieStorage){
  $scope.movies=[];
  $scope.myMovies = [];
  $scope.selectedMovie = {};
  $scope.movieCollection = [];
  $scope.movieWatchList = [];

  $scope.searchMovieDatabase = function() {
    console.log($scope.databaseSearch);
    $scope.test1 = false;
    $scope.test2 = true;
     movieStorage.getMovieList($scope.databaseSearch).then(function(movieCollection){
    // console.log("movieCollection from promise", movieCollection);
    $scope.movies = movieCollection;
    // console.log("First:", $scope.movies[0][1].Title);
    $scope.selectedMovie = $scope.movies.filter(function(movie){
      return movie.id === $routeParams.itemId;
    })[0];
  });
};
  
$scope.deleteMovie = function(movieId){
        console.log("delete this movie!!");
        movieStorage.deleteMovie(movieId).then(function(response){
          movieStorage.getMyMovieWatchList().then(function(movieCollection){
            $scope.movieWatchList = movieCollection;
          });
        });
      };

  $scope.inputMovieChange = function(movieId) {
        movieId.rating = $scope.rating;
        console.log("rating", $scope.rating);
        movieStorage.updateMovie(movieId)
        .then(function(response){
            // console.log(response);
        })
      } 

  $scope.addMovie = function(newMovie) {
    movieStorage.postNewMovie(newMovie)
      .then(function successCallback(response){
        // console.log(response);
        // $location.url("/items/list");
      });
  }; 

  $scope.searchWatchList = function() { 
      $scope.test1 = true;
      $scope.test2 = false;
      movieStorage.getMyMovieWatchList().then(function(movieCollection){
      // console.log("movieStorage", movieStorage);
      $scope.movieWatchList = movieCollection;
      // console.log("movieCollection", $scope.movieCollection);
  });
};

  $scope.checkWatchList = function() {
    if ($scope.movieWatchList.length > 0 && $scope.movieWatchList !== undefined) {
        // console.log($scope.movieWatchList);
      return false;
      }
    else {
      return true;
    }
  }
$scope.searchWatchList();

  });
