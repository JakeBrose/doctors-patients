'use strict';

angular.module("docs").factory("DoctorFactory", function($http, $q, FBUrl){
    let getDocInfo = () => {
            return $q(function(resolve, reject){
                $http.get(`${FBUrl}/doctors.json`)
                .then(function(data){
                    resolve(data);                    
                })
                .catch(function(error){
                    reject(error);
                });
            });
    };
    return { getDocInfo };
});