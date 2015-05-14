'use strict';

/* object definition */
var Post = function(id, title, content, permalink, author, datePublished){
	this.id = id;
	this.title = title;
	this.content = content;
	this.permalink = permalink;
	this.author = author;
	this.datePublished = datePublished;
	this.comments = [];
};


/* methods */
Post.prototype.log2console = function() {
	console.log('ID: ' + this.id);
	console.log('Title: ' + this.title);
	console.log('Content: ' + this.content);
	console.log('Permalink: ' + this.permalink);
	console.log('Author: ' + this.author);
	console.log('DatePublished: ' + this.datePublished);

	console.log('Comment');
	for (var i = this.comments.length - 1; i >= 0; i--) {
		console.log(this.comments[i].print());
	};
};

Post.prototype.addComment = function(commment){
	this.comments.push(comment);
};


