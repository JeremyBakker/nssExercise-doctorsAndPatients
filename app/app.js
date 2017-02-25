"use strict";

var app = angular.module("doctorApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
  when('/doctors',{
    templateUrl: "partials/partial.doctors.html",
    controller: "doctorsCtrl"
  }).
  when('/patients/:lastName', {
  	templateUrl: "partials/partial.patients.html",
  	controller: "patientsCtrl"
  }).
  otherwise('/');
});