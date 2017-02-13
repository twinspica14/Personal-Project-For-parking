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
         .controller('AppCtrl', function($scope,$rootScope, $state,classifiedsFactory, $http,$mdSidenav,$mdToast,$mdDialog){
        
        //classifiedsFactory.getClassifieds().then(function(nilesh){ //the data is variable could be anyting as nilesh and nilesh.data is data extracted from variable
      // $scope.objects = nilesh.data;
       //$scope.categories = getcategories($scope.objects);
       $scope.todos= classifiedsFactory.ref;
       $scope.todos.$loaded().then(function(todos){
        $scope.categories=getcategories($scope.todos)
       });




$scope.objects1 = [];
$scope.lol = [];
$scope.lol = new Date();
$scope.objects1.time = $scope.lol.getTime();

$scope.reloadRoute = function() {
    $state.reload();
}

 $scope.navi=function(){
     $mdSidenav('left').open();


 }
 $scope.clo=function(){
     $mdSidenav('left').close();
  $scope.objects1 = {}; 
  $scope.lol = {};
   $scope.objects1 = {};
   $state.reload();
 }



 $scope.addTodo = function () {
 
  var timestamp = new Date().valueOf();
       $scope.todos.$add({
            id: timestamp,
            name: $scope.objects1.name,
            Pan: $scope.objects1.Pan,
            Car: $scope.objects1.Car,
            carname: $scope.objects1.carname,
             time: $scope.objects1.time,
            status: 'registered'
        });
            $scope.objects1={};

       $scope.clo();
}
    // ADD TODO ITEM METHOD

    // REMOVE TODO ITEM METHOD
    $scope.removeTodo = function(index, todo) {

      // CHECK THAT ITEM IS VALID
      if (todo.id === undefined) return;

      // FIREBASE: REMOVE ITEM FROM LIST
      $scope.todos.$remove(todo);

    };
    $scope.finished=function(){ //saveEdit
    $scope.todos.$save($scope.todo).then(function(){
    $scope.objects1={};
    $scope.clo();

})
}
    // MARK TODO AS IN PROGRESS METHOD
    $scope.startTodo = function(index, todo) {

      // CHECK THAT ITEM IS VALID
      if (todo.id === undefined) return;

      // UPDATE STATUS TO IN PROGRESS AND SAVE
      todo.status = 'in progress';

 var id= todo.$id; //id var tskes id of current object
       $scope.todo=$scope.todos.$getRecord(id);// so does thi
$scope.todo.time = $scope.objects1.time; 
    $scope.objects1 = $scope.todo;//objects1 is ng-model
    $scope.todos.$save($scope.objects1);//objects1 now will havedats ehich will be passed to objects

$scope.finished();
    };

   

    // MARK TODO AS COMPLETE METHOD
    $scope.completeTodo = function(index, todo) {

      // CHECK THAT ITEM IS VALID
      if (todo.id === undefined) return;

      // UPDATE STATUS TO COMPLETE AND SAVE
      todo.status = 'complete';
      

      var id= todo.$id; //id var tskes id of current object
       $scope.todo=$scope.todos.$getRecord(id);// so does thi
       $scope.todo.seats= '10';
    $scope.todo.comp = new Date().getTime(); 
var diference =($scope.todo.comp - $scope.todo.time);
$scope.todo.dif = Math.round(diference/60000);
    $scope.objects1 = $scope.todo;
 //editclassified 
 
    $scope.todos.$save($scope.objects1);


$scope.reloadRoute();
    };
function getcategories(todos){
    var categories = [];
    angular.forEach(todos, function(item) //forEach is inbuilt angular function
    {
            categories.push(item.status);


        
    });
    return _.uniq(categories);
}


});

})();


