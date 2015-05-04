    'use strict';
    angular.module('PostMan.posts.services', []).factory('postService', function () {
        return {
            posts: [{
                    id: 1,
                    title: 'Sample title 1',
                    content: 'Sample content 1',
                    permalink: 'sample-title-1',
                    author: 'dackow',
                    datePublished: '2015-05-04'
            },
                {
                    id: 1,
                    title: 'Sample title 1',
                    content: 'Sample content 1',
                    permalink: 'sample-title-1',
                    author: 'dackow',
                    datePublished: '2015-05-04'
                },
                {
                    id: 1,
                    title: 'Sample title 1',
                    content: 'Sample content 1',
                    permalink: 'sample-title-1',
                    author: 'dackow',
                    datePublished: '2015-05-04'
                }
                   ],
            getAll: function () {
                return this.posts;
            },
            getPostById: function (id) {
                for (var i in this.posts) {
                    if (this.posts[i].id == id) {
                        return this.posts[i];
                    }
                }
            }
        }
    })