/// <reference path="sound-vm.js" />
/// <reference path="conversation-vm.js" />
/// <reference path="jukebox-vm.js" />
function AppViewModel() {
    this.soundEffectVm = new SoundEffectViewModel();
    this.conversationVm = new ConversationViewModel(this.soundEffectVm);
    this.jukeboxVm = new JukeboxViewModel();
}