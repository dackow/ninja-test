'use strict';

var postManServicesModule = angular.module('PostMan.admin.services', []);

postManServicesModule.value('API_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id');

postManServicesModule.service('popupService', ['$windonw', function($window){
	this.showPopup = function(message){
		return $window.confirm(message);
	};
}]);

postManServicesModule.factory('Post', ['$resource', 'API_ENDPOINT', function($resource, API_ENDPOINT){
	return $resource(API_ENDPOINT, {id: '@id'}, 
		{update: {method: 'PUT'}});
}]);
