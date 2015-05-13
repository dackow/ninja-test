'use strict';

var commentsDir = function(){
	return {
		restrict:'AEC',
		scope:{
			postInstance:'='
		},
		replace: true,
		link: function(scope, elem, attrs){
			scope.saveComment=function(){
				var postID=scope.postInstance._id, savedPostInstance={};
				scope.comment.datePublished = new Date(); 
				angular.copy(scope.postInstance,savedPostInstance); 
				savedPostInstance.comments.unshift(scope.comment); 
				scope.postInstance.comments.unshift(scope.comment); 
				scope.comment = {}; 
			}
		},
		templateUrl:'modules/posts/views/comments.html'
	}
}

angular.module('PostMan.posts.directives').directive('postComments', commentsDir);