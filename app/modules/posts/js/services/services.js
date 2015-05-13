    'use strict';
    angular.module('PostMan.posts.services', []).factory('postService', function () {
        var next_index;
        return {
            posts: [{
                id: 1,
                title: 'Sample title 1',                
                content: "Lore34534m Ipsum iswerw3434534534erkjkjkkjkjkjjkj simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                permalink: 'sample-title-1',
                author: 'dackow',
                datePublished: '2015-05-04'
            },
            {
                id: 2,
                title: 'Sample title 1',
                content: 'Sample content 1',
                permalink: 'sample-title-1',
                author: 'dackow',
                datePublished: '2015-05-04'
            },
            {
                id: 3,
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
            },
            updatePost: function(post){
                for (var i in this.posts) {
                    if (this.posts[i].id == post.id) {
                        this.posts.splice( this.posts.indexOf(this.post[i]), 1 );
                        this.posts.push(post);
                    }
                }
            },
            savePost: function(post){
                post.id = next_index++;
                this.posts.push(post);
            },

            deletePost: function(post)  {
                for (var i in this.posts) {
                    if (this.posts[i].id == id) {
                        delete this.posts[i];
                    }
                }                
            }
        }

    })


    
    
