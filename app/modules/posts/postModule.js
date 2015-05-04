(function () {
    angular.module('PostMan.posts').config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
        $stateProvider.state('allPosts',{
        	url: '/posts',
        	templateUrl: 'modules/posts/views/posts.html',
            controller: 'PostController'
        });
        
    }])
});