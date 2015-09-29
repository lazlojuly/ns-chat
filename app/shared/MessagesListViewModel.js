var observableArray = require("data/observable-array");

function MessagesListViewModel(messages) {

	var viewModel = new observableArray.ObservableArray(messages);

	viewModel.add = function(txt) {
		viewModel.push({content:txt,date:new Date()});
	};

	return viewModel;

}

module.exports = MessagesListViewModel;
