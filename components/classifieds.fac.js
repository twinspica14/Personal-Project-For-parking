(function(){

	"use strict";

	angular
		.module("StarterApp")
		.factory("classifiedsFactory", function($http, $firebaseArray){

	 var todosRef = new Firebase('https://carid-a6fc4.firebaseio.com/');

    // GET TODOS AS AN ARRAY
    return{
			ref: $firebaseArray(todosRef)
			//console.log('added record with id' + id);

					}


		});
})();















