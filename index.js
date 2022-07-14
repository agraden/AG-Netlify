// let app = angular.module("loginApp", ["ngRoute"]);

// app.config(function ($routeProvider) {
//   $routeProvider
//   .when("/", {
//     templateURL: "login.html",
//   })
//   .when("/login", {
//     templateURL: "login.html",
//   })
//   .when("/dashboard", {
//     templateURL: "dashboard.html"
//   })
// });

// //ng-app="loginApp" ng-controller="membersAreaController"

// app.controller("membersAreaController", function ($scope, $http) {
//   let initUser = netlifyIdentity.currentUser();

//   netlifyIdentity.on('init', () => {
//     initUser = netlifyIdentity.currentUser();
//   });

//   netlifyIdentity.on('login', () => {
//     if (initUser == null) {
//       window.location.replace('#!dashboard');
//     }
//     netlifyIdentity.close();
//   });

//   netlifyIdentity.on('logout', () => {
//     netlifyIdentity.close();
//     window.location.replace('/')
//   });
// });

netlifyIdentity.on('init', () => {
  initUser = netlifyIdentity.currentUser();
});

netlifyIdentity.on('login', () => {
  if (initUser == null) {
    window.location.replace('dashboard');
  }
  netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
  netlifyIdentity.close();
  window.location.replace('/')
});