var app = angular.module("MovieHistoryApp", ["ngRoute"])
  .constant("firebaseURL","https://movie-scenesters.firebaseio.com/")
  .constant("omdbURL", "http://www.omdbapi.com/");

// let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
//   if(AuthFactory.isAuthenticated()){
//     console.log("User is authenticated, resolve route promise");
//     resolve();
//   } else {
//     console.log("User is not authenticated, reject route promise");
//     reject();
//   }
// })

app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/movie-list.html',
      controller: 'MovieListCtrl',
      // resolve: {isAuth}
      }).
    when('/movies/list',{
      templateUrl: 'partials/movie-list.html',
      controller: 'MovieListCtrl',
      // resolve: {isAuth}
      }).
      when('/logout', {
        templateUrl: 'partials/login.html',
        controller: "LoginCtrl"
      }).
      otherwise('/');
});

// app.run(($location) =>{
//   let todoRef = new Firebase("https://movie-scenesters.firebaseio.com/");

//   todoRef.onAuth(authData =>{
//     if(!authData){
//       $location.path("/login");
//     }
//   })
// })




















