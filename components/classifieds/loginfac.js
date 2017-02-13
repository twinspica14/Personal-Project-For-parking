(function(){

	"use strict";

	angular
		.module("StarterApp")
		.factory("classifiedsFactory2", function($http, $firebaseArray){

	 var fuckRef = new Firebase('https://example-ae187.firebaseio.com/');

    // GET TODOS AS AN ARRAY
    return{
			ref: $firebaseArray(fuckRef)
			//console.log('added record with id' + id);

					}


		});
})();















