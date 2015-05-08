'use strict';

var postManAdmin = angular.module('PostMan.admin', ['PostMan.base']);

postManAdmin.config(['$stateProvider','RoutingHelperProvider', function($stateProvider,RoutingHelperProvider){
	var states = [
	{
		name: 'admin',
		url: '/admin',
		abstract: true,
		templateUrl: 'modules/admin/views/admin-home.html',
		controller: AdminController
	},
	{
		name: 'admin.postNew',
		url: '/posts/new',
		templateUrl: 'modules/admin/views/admin-new-post.html',
		controller: PostCreationController
	},
	{
		name: 'admin.postViewAll',
		url: '',
		templateUrl: 'modules/admin/views/admin-all-posts.html',
		controller: PostListController
	},
	];
	
	RoutingHelperProvider.populateStates(states);
}]);
