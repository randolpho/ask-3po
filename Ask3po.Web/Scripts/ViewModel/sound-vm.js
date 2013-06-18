/// <reference path="../Model/static-data.js" />
/// <reference path="../knockout-2.2.1.debug.js" />
function SoundEffectViewModel() {
    var self = this;
    this.currentSoundEffect = ko.observable("");
    this.setSoundEffect = function SetSoundEffect(id) {
        self.currentSoundEffect(SoundEffects[id]);
    }
}