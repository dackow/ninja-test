'use strict';

var postManBase = angular.module('PostMan.base', ['ui.router']);

/*var postManBaseValue = angular.value('BaseValue', {
	populateStates : function(states){
				states.forEach(function(item){
			$stateProvider.state(item.name, {
				url: item.url,
				templateUrl: item.templateUrl,
				controller: item.controller
			});
		});
	}
	});
*/

var postManBaseFactory = postManBase.factory('MyFactory', function(){
	var _service = {};

	_service.populateStates = function(states){
		states.forEach(function(item){
			console.log(item|json);
		});
	}

	return _service;
});

// var postManBaseFactory = postManBase.factory('Base', function(){
// 	var baseFunctionality = {};

// 	baseFunctionality.populateStates = function(states){
// 		states.forEach(function(item){
// 			$stateProvider.state(item.name, {
// 				url: item.url,
// 				templateUrl: item.templateUrl,
// 				controller: item.controller
// 			});
// 		});
// 	};

// 	return {
// 		BaseFunctionality: baseFunctionality
// 	}
// });



