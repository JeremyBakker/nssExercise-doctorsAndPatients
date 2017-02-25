"use strict";

app.controller('doctorsCtrl', function($scope, DataFactory){
	DataFactory.getDoctorData().then((data)=>{
		let dataset = data.data.doctors;
		let doctorArray = [];
		for (var doctors in dataset){
			let newObject = {};
			newObject.key = Object.keys(dataset[doctors]);
			newObject.firstName = dataset[doctors][newObject.key].first_name;
			newObject.lastName = dataset[doctors][newObject.key].last_name;
			newObject.specialty = dataset[doctors][newObject.key].specialty;
			doctorArray.push(newObject);
		}
		$scope.doctors = doctorArray;
	});
});