var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){
	
	$scope.removeTask = function(task){
		var removedTask = $scope.tasks.indexOf(task);
		$scope.tasks.splice(removedTask, 1);
	}
	
	$scope.addTask = function() {
		$scope.tasks.unshift({
			title: $scope.newtask.title,
			rate: parseInt($scope.newtask.rate),
			duration: parseInt($scope.newtask.duration),
			level: $scope.newtask.level,
            icon: $scope.newtask.icon			
		});
		
		$scope.newtask.title = "";
		$scope.newtask.rate = "";
		$scope.newtask.duration = "";
		$scope.newtask.level = "";
        $scope.newtask.icon = "";		
	}
	
    $scope.tasks = [
	{
	title: "marketing consultations",
	rate: 1800,
	duration: 3,
	level: "medium",
	icon: "img/marketing.png"
	},
	{
	title: "collect a team",
	rate: 3000,
	duration: 7,
	level: "hard",
	icon: "img/growth.png" 
	},
	{
	title: "brain storm",
	rate: 600,
	duration: 2,
	level: "easy",
	icon: "img/bulb.png"
    },
	{	
	title: "coding",
	rate: 2900,
	duration: 5,
	level: "medium",
	icon: "img/code.png"
    },
	{		
	title: "budget",
	rate: 1300,
	duration: 3,
	level: "hard",
	icon: "img/growth.png" 
    },
	{	
	title: "testing",
	rate: 1500,
	duration: 2,
	level: "hard",
	icon: "img/code.png"
    }	
	];
}]);
