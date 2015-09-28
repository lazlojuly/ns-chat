var observable = require("data/observable");

function MessageModel(model) {

	var viewModel = new observable.Observable({
		content: model.content || "",
		date: model.date || ""
	});

	return viewModel;

}
