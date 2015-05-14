'use strict';

var dirModule = angular.module('myApp.directives', []);

// dirModule.directive('appVersion', ['version', function(version) {
// 	return function(scope, elm, attrs) {
// 		elm.text(version);
// 	};
// }]);

dirModule.directive('myCustomer', function() {
	return {
		template: 'Name: {{customer.name}} Address: {{customer.address}}'
	};
});