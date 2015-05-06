var postManModule = angular.module('PostMan.posts', ['PostMan.posts.controllers','ui.router']);

postManModule.config(['$stateProvider','$locationProvider',function ($stateProvider,$locationProvider, PostController, PostDetailsController) {
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

	// BaseValue.populateStates(states);
	// var injector = angular.injector(['PostMan.base']);
	// var base = injector.get('BaseFunctionality');
	// base.BaseFunctionality.populateStates(states, $stateProvider);

	//BaseProvider.BaseFunctionality(states);
	states.forEach(function(item){
		$stateProvider.state(item.name, {
			url: item.url,
			templateUrl: item.templateUrl,
			controller: item.controller
		})
	});


	// $stateProvider.state('allPosts', {
	// 	url: '/posts',
	// 	templateUrl: 'modules/posts/views/posts.html',
	// 	controller: PostController
	// });



}]);