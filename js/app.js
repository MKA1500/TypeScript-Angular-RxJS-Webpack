var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', '$http', function($scope, $http){
	
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
	
	$http.get('data.json').success(function(data){
		$scope.tasks = data;
	});

}]);
