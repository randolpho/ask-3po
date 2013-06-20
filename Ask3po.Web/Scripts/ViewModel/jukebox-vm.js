/// <reference path="sound-vm.js" />
/// <reference path="../Model/static-data.js" />
/// <reference path="../Model/util.js" />
/// <reference path="../knockout-2.2.1.debug.js" />
function JukeboxViewModel(soundEffectVm) {
    var self = this;
    var currentSongIndex = 0;
    var numSongs = 0;
    this.songs = ko.observableArray([]);
    this.currentSong = ko.observable("");
    this.selectSong = function (item) {
        var index = self.songs.indexOf(item);
        var current = self.songs()[currentSongIndex];
        current.css("");
        currentSongIndex = index;
        item.css("current");
        self.currentSong(item.url());
    }

    this.songEnded = function () {
        var next = currentSongIndex + 1;
        if (next > numSongs) next = 0;
        self.selectSong(self.songs()[next]);
    }

    this.initialize = function () {
        numSongs = JukeboxTracks.length;
        for (var i = 0; i < numSongs; i++) {
            self.songs.push(new SongViewModel(JukeboxTracks[i]));
        }
        self.selectSong(self.songs()[RandomUtil.index(JukeboxTracks)]);
    }
}