 var app = angular.module('myApp', []);

   app.config(function($routeProvider) {
      $routeProvider
      .when("/", {
          templateUrl : "./views/inicio.html"
      })
      .when("/contacto", {
          templateUrl : "./views/contacto.html"
      });
  });

    app.controller('UsersCtrl', function($scope) {
        $scope.UserName= "User123";
        $scope.FullName= "Joe";
    });

    app.controller('myCtrl', function($scope, $http) {
          $http.get("http://localhost:10633/api/personas").then(function (response) {
              $scope.myData = response.data;
              console.log(response.data);
          });
      });