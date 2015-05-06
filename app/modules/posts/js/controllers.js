'use strict';

var mainControllerModule = angular.module('PostMan.posts.controllers', ['PostMan.posts.services']);


//**** postController ****//
var postController = function($scope, postService){
   $scope.getAllPosts = function(){
       return postService.getAll();
   };

   $scope.posts = $scope.getAllPosts();
};

postController.$inject = ['$scope', 'postService'];
mainControllerModule.controller('PostController', postController);





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

mainControllerModule.controller('PostDetailsController', postDetailsController);

// mainControllerModule.config(function(){

// });


