'use strict';

var postUpdateController = function($scope, $stateParams, $state, postService){
	$scope.post = postService.getPostById({id:$stateParams.id});
	$scope.buttonText = "Update";

	$scope.updatePost = function(){
		$scope.buttonText="Updating...";
		postService.updatePost($scope.post);
	};
};


postUpdateController.$inject = ['$scope', '$stateParams', '$state', 'postService'];

angular.module('PostMan.admin.controllers').controller('postUpdateController', postUpdateController);