'use strict';

//**** postController ****//
var postController = function($scope, postService){
   $scope.getAllPosts = function(){
       return postService.getAll();
   };

   $scope.posts = $scope.getAllPosts();
};

postController.$inject = ['$scope', 'postService'];
angular.module('PostMan.posts.controllers').controller('PostController', postController);

