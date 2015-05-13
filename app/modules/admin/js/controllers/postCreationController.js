'use strict';

var postCreationController = function($scope, $state, postService){
	$scope.post = {
		id: 0,
		title: '',
		content: '',
		permalink: '',
		author: '',
		datePublished: ''
	};

	$scope.buttonText = "Create";

	$scope.savepost = function(){
		$scope.buttonText = "Saving...";
		$scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
		postService.savePost($scope.post);
		$state.go('admin.postViewAll');
	};

};


postCreationController.$inject = ['$scope', '$state', 'postService'];

angular.module('PostMan.admin.controllers').controller('postCreationController', postCreationController);