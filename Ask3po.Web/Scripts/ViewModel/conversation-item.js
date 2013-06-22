/// <reference path="../knockout-2.2.1.debug.js" />
function ConversationItemViewmodel(type, words, conversationVm) {
    var self = this;
    var stableClass = "speech";
    var poppingClass = "speech pop";
    var slidingClass = "speech slideup pop";

    this.words = words;
    this.rootCss = ko.observable(poppingClass);
    this.questionText = ko.observable("");
    this.isInput = (type === "input");
    this.typeCss = "threepiospeech";

    this.styleMap = {
        display: ko.observable(useIeAnimationHack ? "none": "")
    };

    if (type === "friend") this.typeCss = "friendspeech";

    this.popIn = function PopIn() {
        if(useIeAnimationHack)  self.styleMap.display("block");
        self.rootCss(stableClass);
    }
    this.popOut = function PopOut() {
        self.rootCss(poppingClass);
    }
    this.slideUp = function SlideUp() {
        self.rootCss(slidingClass);
    }

    this.decisionClick = function () {
        var question = self.questionText();
        conversationVm.beginConversation(question, self);
    }
}
