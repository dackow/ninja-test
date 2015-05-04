(function(){
	angular.module('PostMan').run(['state', function(state){
		$state.go('allPosts');
	}]);
})


