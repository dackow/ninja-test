'use strict';

var postManMainModule = function(){
    // console.log('postManMainModule constructor');
};

//postManMainModule['$inject'] = ['ui.router'];

angular.module('PostMan', ['ui.router', 'PostMan.posts', postManMainModule]);

angular.module('PostMan').run(['$state',function($state) {
    // console.log('app.js constructor');
    $state.go('allPosts');
 }]);