var wapp = angular.module('demo',[]);

wapp.controller('weatherController', function($scope,$http,$log,weatherService){
		console.log("inside controller"); 	
		$scope.selectZips = '';
		$scope.weatherData = '';
		$scope.getId = function(idPassed){
			if(idPassed && idPassed !=''){
				weatherService.getWeatherData(idPassed).success(function(response){
					$scope.weatherData = response;
				})
			}
		}
		
	});

	// http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=2de143494c0b295cca9337e1e96b00e0