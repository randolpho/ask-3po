/// <reference path="../Model/static-data.js" />
/// <reference path="../knockout-2.2.1.debug.js" />
function SoundEffectViewModel() {
    var self = this;

    // round-robin the various hidden audio tabs, so we can play more than one sound
    // at once. Maybe someday I'll refactor this into a general arbitrary number of
    // audio elements. But for now, static works. 
    this.soundEffect0 = ko.observable("");
    this.soundEffect1 = ko.observable("");
    this.soundEffect2 = ko.observable("");
    this.soundEffect3 = ko.observable("");
    this.soundEffect4 = ko.observable("");
    this.soundEffect5 = ko.observable("");
    this.soundEffect6 = ko.observable("");
    this.soundEffect7 = ko.observable("");
    this.soundEffect8 = ko.observable("");
    this.soundEffect9 = ko.observable("");

    this.nextSoundEffect = 0;

    this.setSoundEffect = function SetSoundEffect(id) {
        var next = "soundEffect" + self.nextSoundEffect++;
        if (self.nextSoundEffect > 9) self.nextSoundEffect = 0;
        self[next]("");
        self[next](SoundEffects[id]);
    }
}