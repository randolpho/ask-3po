function SongViewModel(model) {
    this.css = ko.observable("");
    this.name = ko.observable(model.name);
    this.url = ko.observable(model.url);
}