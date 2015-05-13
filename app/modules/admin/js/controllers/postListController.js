'use strict';

var postListController = function($scope, popupService, $state, postService){
	$scope.posts = postService.getAll();

	$scope.deletePost = function(post){
		if(popupService.showPopup('Do you want to delete this post?')){
			postService.deletePost(post);
			$state.go('admin.postViewAll', undefined, {reload: true});
		}
	};
};


postListController.$inject = ['$scope','popupService','$state','postService'];

angular.module('PostMan.admin.controllers').controller('postListController', postListController);