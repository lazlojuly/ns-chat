var observable = require("data/observable");
var MessagesListViewModel = require('../../shared/MessagesListViewModel');

var messages = new MessagesListViewModel([]);
var pageData = new observable.Observable({
	messageInput: "",
	messageList: messages,
});

exports.pageLoaded = function(args) {
	var page = args.object;
	page.bindingContext = pageData;
};

exports.addMessage = function() {

	if (pageData.get("messageInput").trim() !== "") {
		messages.add(pageData.get("messageInput").trim());
		pageData.set("messageInput", "");
	}
};
