/// <reference path="sound-vm.js" />
/// <reference path="../Model/static-data.js" />
function JukeboxViewModel(soundEffectVm) {
    var self = this;
    var hovering = false;
    this.onMouseOver = function () {
        if (hovering) return;
        hovering = true;
        soundEffectVm.setSoundEffect("saberOn");
    };

    this.onMouseOut = function () {
        soundEffectVm.setSoundEffect("saberOff");
        hovering = false;
    }

    this.songOver = function() {

    }

    //this.currentSong = 
}