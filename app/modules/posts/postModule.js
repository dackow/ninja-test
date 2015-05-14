var postManModule = angular.module('PostMan.posts', ['PostMan.posts.controllers','ui.router','PostMan.base','PostMan.posts.directives']);

postManModule.config(['$stateProvider','$locationProvider','RoutingHelperProvider',function ($stateProvider,$locationProvider, RoutingHelperProvider, PostController, PostDetailsController) {
	var states = [
	{
		name: 'allPosts',
		url: '/posts',
		templateUrl: 'modules/posts/views/posts.html',
		controller: PostController
	},
	{
		name: 'singlePost',
		url: '/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
		controller: PostDetailsController
	},
	];

	RoutingHelperProvider.populateStates(states);



}]);