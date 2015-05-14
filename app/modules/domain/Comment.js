'use strict';

var Comment = function(author, comment){
	this.author = author;
	this.comment = comment;
	this.datePublished = new Date();
};


Comment.prototype.print = function() {
	console.log('Author: ' + this.author);
	console.log('Comment: ' + this.comment);
	console.log('Date: ' + this.datePublished);
};
