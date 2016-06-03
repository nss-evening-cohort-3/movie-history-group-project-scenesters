var app = angular.module("MovieApp", ["ngRoute"])
  .constant("firebaseURL", "https://todo-appz2-scott.firebaseio.com/")
  .constant("omdbURL", "http://www.omdbapi.com/");

  app.config(function($routeProvider){
  $routeProvider.
    when("/",{
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl",
    }).
    otherwise("/");
  });