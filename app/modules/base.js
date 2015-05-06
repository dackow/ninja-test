'use strict';

var postManBase = angular.module('PostMan.base', ['ui.router']);

var postManBaseFactory = postManBase.factory('Base', function(){
	var baseFunctionality = {};

	baseFunctionality.populateStates = function(states){
		states.forEach(function(item){
			$stateProvider.state(item.name, {
				url: item.url,
				templateUrl: item.templateUrl,
				controller: item.controller
			});
		});
	};

	return {
		BaseFunctionality: baseFunctionality
	}
});



