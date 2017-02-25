"use strict";

app.controller('patientsCtrl', function($scope, DataFactory, $routeParams){
	
	$scope.routeParams = $routeParams.lastName;
	var routParams = $routeParams.lastName.toLowerCase();
	
	DataFactory.getPatientData(routParams).then((object)=>{
		let patients = object.data;
		let patientArray = [];
		for (var patient in patients) {
		let newObject = {};
		newObject.firstName = patients[Object.keys(patients)].first_name;
		newObject.lastName = patients[Object.keys(patients)].last_name;
		newObject.ailment = patients[Object.keys(patients)].ailment;
		patientArray.push(newObject);
		}
		$scope.patients = patientArray;
	});
});