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

  return {getMovieList:getMovieList}
})