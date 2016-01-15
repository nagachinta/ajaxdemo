//var app = angular.module('demo');

wapp.factory('weatherService',['$http','$log',function($http,$log){
		return {
	        getWeatherData: function(id) {
	        	var formateURL = 'http://api.openweathermap.org/data/2.5/group?id='+id+'&units=metric&appid=2de143494c0b295cca9337e1e96b00e0';
	        	//var formateURL = 'http://api.openweathermap.org/data/2.5/group?id=524901, 703448, &units=metric&appid=2de143494c0b295cca9337e1e96b00e0';
	            return $http.get(formateURL);
	        }
	    };
	}]);
