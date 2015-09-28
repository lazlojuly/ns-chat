var MessageModel = require('../../shared/MessageModel');

var message = new MessageModel({
	content:'This is a long message requiring text wrapping for the label element.',
	date:new Date()
});

var pageVars = {
	messages:[
		message,message,message,message,
		message,message,message,message,
		message,message,message,message
	]
};

exports.pageLoaded = function(args) {
	var page = args.object;
	page.bindingContext = pageVars;
};
