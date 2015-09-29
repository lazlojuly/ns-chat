var observableArray = require("data/observable-array");

function MessagesListViewModel(messages) {

	var viewModel = new observableArray.ObservableArray(messages);

	viewModel.add = function(obj) {
		viewModel.push(obj);
	};

	return viewModel;

}

module.exports = MessagesListViewModel;
