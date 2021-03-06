var observable = require("data/observable");
var view = require("ui/core/view");
var MessagesListViewModel = require('../../shared/MessagesListViewModel');
var scrollView = "";

var messages = new MessagesListViewModel([]);
var pageData = new observable.Observable({
	messageInput: "",
	messageList: messages,
	messageCss: "message-left",
	messageCount: 0
});

exports.pageLoaded = function(args) {
	var page = args.object;
	page.bindingContext = pageData;
	// scrollView = view.getViewById(page, "messageScroll");
};

exports.addMessage = function() {

	if (pageData.get("messageInput").trim() !== "") {
		pageData.set("messageCount", pageData.messageCount+1);
		messages.add({
			content:pageData.get("messageInput").trim(),
			messageCss:((pageData.messageCount % 2) == 0) ? "message-right" : "message-left"
		});
		// scrollView.scrollToVerticalOffset(0, true);
		pageData.set("messageInput", "");
	}
};
