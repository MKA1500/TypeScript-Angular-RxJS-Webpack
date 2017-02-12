var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){
	$scope.removeTask = function(task){
		var removedTask = $scope.tasks.indexOf(task);
		$scope.tasks.splice(removedTask, 1);
	}
	
    $scope.tasks = [
	{
	title: "marketing consultations",
	rate: 800,
	duration: 2,
	level: "easy"
	},
	{
	title: "collect a team",
	rate: 3000,
	duration: 7,
	level: "hard" 
	},
	{
	title: "brain storm",
	rate: 300,
	duration: 1,
	level: "easy"
    },
	{	
	title: "business plan",
	rate: 2000,
	duration: 4,
	level: "medium" 
    },
	{	
	title: "technical consultations",
	rate: 2900,
	duration: 5,
	level: "medium"
    },
	{		
	title: "budget",
	rate: 1300,
	duration: 3,
	level: "hard" 
    },
	{	
	title: "clean the office",
	rate: 50,
	duration: 1,
	level: "hard"
    }	
	];
}]);
