/// <reference path="../knockout-2.2.1.debug.js" />
function ConversationItemViewmodel(type, words, conversationVm) {
    var self = this;
    var stableClass = "speech";
    var poppingClass = "speech pop";

    this.words = words;
    this.rootCss = ko.observable(poppingClass);
    this.questionText = ko.observable("");
    this.isInput = (type === "input");
    this.typeCss = "threepiospeech";

    if (type === "friend") this.typeCss = "friendspeech";

    this.popIn = function PopIn() {
        self.rootCss(stableClass);
    }
    this.popOut = function PopIn() {
        self.rootCss(poppingClass);
    }
    this.decisionClick = function () {
        var question = self.questionText();
        conversationVm.beginConversation(question);
    }
}
