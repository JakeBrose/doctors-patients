'use strict';

angular.module("docs").controller("PatInfoCtrl", function($scope, PatientFactory, $routeParams){
    
    PatientFactory.getPatientInfo($routeParams.id).then(function(data){
        console.log("data", data);
        $scope.patientData = data.data;
    }).catch(function(error){
        console.log("nope", error);
    });

});