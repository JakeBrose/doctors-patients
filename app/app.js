'use strict';

angular.module("docs", ["ngRoute"])
.constant("FBUrl", "https://doctor-patients-dc56b.firebaseio.com")
.config($routeProvider => {
    $routeProvider
      .when("/doctors", {
        templateUrl: "partials/doctor-info.html",
        controller: "DocInfoCtrl"
      })
      .when("/doctors/:id", {
        templateUrl: "partials/patient-info.html",
        controller: "PatInfoCtrl"
      });
    });