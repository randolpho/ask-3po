/// <reference path="input-vm.js" />
/// <reference path="conversation-item.js" />
/// <reference path="../knockout-2.2.1.debug.js" />
function ConversationViewModel(soundEffectVm) {
    var self = this;
    this.speechBubbleStayingPower = 3000; // 3 seconds
    this.speechBubbles = ko.observableArray([]);
    this.friendboxShowing = ko.observable(false);
    this.friendboxImage = ko.observable("");
    this.initialize = function Initialize() {
        setTimeout(function () { self.addThreepio("Oh!"); }, 200);
        setTimeout(function () {
            self.addThreepio(
                "Hello sir! I am C-3P0, Human-Cyborg Relations. You must be my new master.");
            soundEffectVm.setSoundEffect("hello");
        }, 1000);
        //setTimeout(function () {
        //    self.addThreepio("
        //}, 1200)
        setTimeout(self.addInput, 4400);    
    }

    this.addInput = function AddInput() {
        self.addBubble("input", "You need to make decision? I would be happy to assist! Please ask a yes or no question:");
    }

    this.addFriend = function AddFriend(words) {
        self.addBubble("friend", words);
    }

    this.addThreepio = function AddThreepio(words) { 
        self.addBubble("threepio", words);
    }

    this.addBubble = function AddBubble(type, words) {
        var vm = new ConversationItemViewmodel(type, words, this);
        self.speechBubbles.push(vm);
        setTimeout(function () { vm.popIn(); }, 1); // necessary to time this so rendering can occur
        if (!vm.isInput) {
            self.popBubble(vm);
        }
    }

    this.popBubble = function PopBubble(item) {
        setTimeout(function () {
            item.popOut();
            setTimeout(function () {
                self.speechBubbles.remove(item);
            }, 200);
        }, self.speechBubbleStayingPower);
    }
    this.beginConversation = function BeginConversation(question) {
        alert("Question: " + question);
    };
}