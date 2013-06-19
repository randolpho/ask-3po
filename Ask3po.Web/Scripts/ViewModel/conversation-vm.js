/// <reference path="../Model/static-data.js" />
/// <reference path="../Model/proxy.js" />
/// <reference path="../Model/util.js" />
/// <reference path="input-vm.js" />
/// <reference path="conversation-item.js" />
/// <reference path="../knockout-2.2.1.debug.js" />
function ConversationViewModel(soundEffectVm) {
    var self = this;
    this.speechBubbleStayingPower = 2500; // 2 seconds
    this.timeBetweenBubbles = 1500;
    this.speechBubbles = ko.observableArray([]);
    this.friendBoxCss = ko.observable("pop");
    this.friendboxImage = ko.observable("");
    this.initialize = function Initialize() {
        setTimeout(function () {
            self.addThreepio(
                "Oh! Hello sir! I am C-3P0, Human-Cyborg Relations. You must be my new master.");
            soundEffectVm.setSoundEffect("hello");
        }, 500);
        setTimeout(function () {
            self.addThreepio("You need to make decision? I would be happy to assist in any way I can.");
        }, 1000);
        setTimeout(self.addInput, 1500);
    }

    this.preloadImages = function PreloadFriendImages() {
        for (var i = 0; i < FriendList.length; i++) {
            self.friendboxImage(FriendList[i].img);
        }
        self.friendboxImage("");
    }

    this.addInput = function AddInput() {
        self.addBubble("input", "Please ask a yes or no question:");
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
        setTimeout(function () { vm.popIn(); }, 100); // necessary to time this so rendering can occur
        if (!vm.isInput) {
            setTimeout(function () {
                self.popBubble(vm);
            }, self.speechBubbleStayingPower);
        }
    }

    this.popBubble = function PopBubble(item) {
        item.popOut();
        setTimeout(function () {
            setTimeout(function () {
                self.speechBubbles.remove(item);
            }, 300);
            item.slideUp();
        }, 200);
    }

    this.showFriend = function ShowFriend(imgUrl) {
        self.friendboxImage(imgUrl);
        self.friendBoxCss("");
    }

    this.hideFriend = function HideFriend() {
        self.friendBoxCss("pop");
    }

    this.yesNo = function YesNo(val) {
        if (val) return "YES";
        return "NO";
    }

    this.beginConversation = function BeginConversation(question, inputItem) {
        self.popBubble(inputItem);
        if (question === "") {
            setTimeout(function () {
                self.addThreepio("What was that, sir? I'm afraid I didn't understand you.");
                setTimeout(self.addInput, self.timeBetweenBubbles);
            }, self.timeBetweenBubbles);
            return;
        }
        var networking = true;
        var decisionResult = null;
        var networkError = false;
        DecisionProxy.getDecision(question, function (json, status, response) {
            if (json == null || status != 200) {
                networkError = true;
            }
            networking = false;
            decisionResult = json;
        });

        var friend = RandomUtil.item(FriendList);

        // line up some handler functions -- we need them here for closures against the 
        // decision results and chosen friend, etc. 
        function error() {
            self.addThreepio("I think we've broken " + friend.name + " with your question.");
            setTimeout(function () {
                var result = self.yesNo(RandomUtil.coinFlip());
                self.addThreepio("I suppose I can go ahead and answer your question for you: " + result);
                self.hideFriend();
                setTimeout(self.addInput, self.timeBetweenBubbles);
            }, self.timeBetweenBubbles);
        }

        // what we do when we're done
        function done() {
            self.addFriend(RandomUtil.item(friend.words));
            setTimeout(function () {
                self.addThreepio("Sir, I think there may be a malfunction in my translation circuits.");
                setTimeout(function () {
                    self.addThreepio("That translated as '" + decisionResult.Translation + "'.");
                    setTimeout(function () {
                        self.addThreepio("I... I think that means '" + self.yesNo(decisionResult.IsYes) + "'.");
                        setTimeout(function () {
                            self.addInput();
                            self.hideFriend();
                        }, self.timeBetweenBubbles);
                    }, self.timeBetweenBubbles);
                }, self.timeBetweenBubbles);
            }, self.timeBetweenBubbles);
        }

        // thinking loop. Add a speech bubble so the user doesn't think the app crashed. 
        // Unless it *does* crash, in which case boom. 
        function thinking() {
            if (networking) {
                self.addFriend("...");
                setTimeout(thinking, self.speechBubbleStayingPower);
                return;
            }
            if (networkError) {
                error();
            } else {
                done();
            }
        }

        // head down the rabbit hole...
        setTimeout(function () {
            self.addThreepio("It's against my programming to offer direct advice. Would you mind if I asked my friend "
                + friend.name + "?");
            self.showFriend(friend.img);
            setTimeout(function () {
                self.addThreepio(question);
                setTimeout(thinking, self.timeBetweenBubbles);
            }, self.timeBetweenBubbles);
        }, 500);

    };
}