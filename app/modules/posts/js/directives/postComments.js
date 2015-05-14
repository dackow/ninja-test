'use strict';


var linkFunction = function(scope, elem, attrs, postService){
	scope.saveComment=function(){
		var post = postService.getPostById(scope.postInstance.id);
		var newComment = new Comment(scope.comment.author, scope.comment.comment);
		post.addComment(newComment);
		scope.comment = {};

		// var postID=scope.postInstance._id, savedPostInstance={};
		// scope.comment.datePublished = new Date(); 
		// angular.copy(scope.postInstance,savedPostInstance); 
		// savedPostInstance.comments.unshift(scope.comment); 
		// scope.postInstance.comments.unshift(scope.comment); 
		// scope.comment = {}; 
	}

};

var commentsDir = function(){
	return {
		restrict:'AEC',
		scope:{
			postInstance:'='
		},
		replace: true,
		link: linkFunction,
		templateUrl:'modules/posts/views/comments.html'
	};
};

angular.module('PostMan.posts.directives').directive('postComments', commentsDir);

