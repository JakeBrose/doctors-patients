'use strict';

angular.module("docs").factory("PatientFactory", function($http, $q, FBUrl){
    let getPatientInfo = (doctorId) => {
        console.log('doctorId',doctorId);
            return $q(function(resolve, reject){
                $http.get(`${FBUrl}/patients.json?orderBy="doctor_id"&equalTo=${doctorId}`)
                .then(function(data){
                    resolve(data);
                })
                .catch(function(error){
                    reject(error);
                });
            });
    };
    return { getPatientInfo };
});