(function(){

    "use strict";

    angular
         .module('StarterApp')
         .directive('preventRightClick', [

            function() {
                return {
                    restrict: 'A',
                    link: function($scope, $ele) {
                        $ele.bind("contextmenu", function(e) {
                            e.preventDefault();
                        });
                    }
                };
            }
        ])
         .controller('LogCtrl', function($scope,$rootScope, $state,classifiedsFactory2, $http,$mdSidenav,$mdToast,$mdDialog){
        
        //classifiedsFactory.getClassifieds().then(function(nilesh){ //the data is variable could be anyting as nilesh and nilesh.data is data extracted from variable
      // $scope.objects = nilesh.data;
    
$scope.usr = [];
$scope.login =function(usr){
if(usr.email == "tsubasa"){
				$state.go('classifieds');

  };




};
});

})()