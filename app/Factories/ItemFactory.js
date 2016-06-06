app.factory("movieStorage", function($q, $http, firebaseURL, omdbURL){

  var getMovieList = function(mo){
      let movies = [];
      return $q(function(resolve, reject){
        $http.get(`${omdbURL}?s=${mo}&y=&r=json`)
          .success(function(movieObject){
            console.log("movieObject", movieObject);
            var movieCollection = movieObject;
            // var itemCollection = itemObject.items;
            Object.keys(movieCollection).forEach(function(key){
              movieCollection[key].id=key;
              movies.push(movieCollection[key]);
            })
            console.log("movies", movies);
            resolve(movies);
          }, function(error){
            reject(error);
      })
    })};

  var postNewMovie = function(newMovie) {
  console.log("qwerttreweq", newMovie);
  return $q(function(resolve, reject){
    $http.post(
        firebaseURL + "movie-scenesters.json",
        JSON.stringify({
          poster: newMovie.Poster,
          title: newMovie.Title,
          year: newMovie.Year,
          rating: 2,
          uid: newMovie.imdbID
          watched: false;
        })
      )
        .success(
          function(objectFromFirebase) {
            resolve(objectFromFirebase);
          });
  })
}; 

  return {getMovieList:getMovieList, postNewMovie: postNewMovie}
})
