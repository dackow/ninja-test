    'use strict';
    angular.module('PostMan.posts.services', []).factory('postService', function () {
        return {
            posts: [{
                id: 1,
                title: 'Sample title 1',                
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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


    
    
