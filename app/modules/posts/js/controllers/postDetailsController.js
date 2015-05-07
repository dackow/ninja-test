'use strict';

//**** postDetailsController ****//
var postDetailsController = function($stateParams, $state, $scope, postService){
    $scope.getPostById = function(id){
      return postService.getPostById(id);  
  };

  $scope.closePost = function(){
      $state.go('allPosts');  
  };

  $scope.singlePost = $scope.getPostById($stateParams.id);
};

angular.module('PostMan.posts.controllers').controller('PostDetailsController', postDetailsController);
