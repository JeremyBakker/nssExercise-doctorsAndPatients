"use strict";

app.factory('DataFactory', function($q, $http, firebaseCredentials) {

    let getDoctorData = () => {

        return $q((resolve, reject)=>{
            $http.get(`${firebaseCredentials.databaseURL}/.json`)
                .then(function (dataObject) {
                resolve (dataObject);
                })
                .catch((error)=>{
                    reject(error);
                });
        });
    };

    let getPatientData = (routeParam) => {
        return $q((resolve, reject)=>{
            $http.get(`${firebaseCredentials.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${routeParam}"`)
            .then(function (dataObject){
                resolve(dataObject);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    return {getDoctorData, getPatientData};
});