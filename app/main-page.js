var messageModel = require("./MessageModel");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = messageModel.messageModel;


}
exports.pageLoaded = pageLoaded;
