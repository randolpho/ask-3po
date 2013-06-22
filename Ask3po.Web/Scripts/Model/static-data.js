// This is the list of tracks I'd use if I weren't trying to publish to the cloud for as cheaply (read: freely) as possible:

//var JukeboxTracks = Object.freeze([
//    { name: "20th Century-Fox Fanfare", url: "/static/music/1_01_Fanfare.mp3" },
//    { name: "Main Title/Rebel Blockade Runner", url: "/static/music/1_02_Main_Title.mp3" },
//    { name: "Imperial Attack", url: "/static/music/1_03_Imperial_Attack.mp3" },
//    { name: "Dune Sea of Tatooine/Jawa Sandcrawler", url: "/static/music/1_04_Dune_Sea.mp3" },
//    { name: "The Moisture Farm", url: "/static/music/1_05_Moisture_Farm.mp3" },
//    { name: "Hologram/Binary Sunset", url: "/static/music/1_06_Binary_Sunset.mp3" },
//    { name: "Landspeeder Search/Attack of the Sand People", url: "/static/music/1_07_Landspeeder_Search.mp3" },
//    { name: "Tales of a Jedi Knight/Learn About the Force", url: "/static/music/1_08_Learn_About_the_Force.mp3" },
//    { name: "Burning Homestead", url: "/static/music/1_09_Burning_Homestead.mp3" },
//    { name: "Mos Eisley Spaceport", url: "/static/music/1_10_Mos_Eisley.mp3" },
//    { name: "Cantina Band", url: "/static/music/1_11_Cantina.mp3" },
//    { name: "Cantina Band, No. 2", url: "/static/music/1_12_Cantina_2.mp3" },
//    { name: "Princess Leia's Theme", url: "/static/music/2_01_Leia_s_Theme.mp3" },
//    { name: "Millennium Falcon/Imperial Cruiser Pursuit", url: "/static/music/2_02_Millennium_Falcon.mp3" },
//    { name: "Destruction of Alderaan", url: "/static/music/2_03_Destruction_of_Alderaan.mp3" },
//    { name: "Death Star/The Stormtroopers", url: "/static/music/2_04_Death_Star.mp3" },
//    { name: "Wookiee Prisoner/Detention Block Ambush", url: "/static/music/2_05_Wookiee_Prisoner.mp3" },
//    { name: "Shootout in the Cell Bay/Dianoga", url: "/static/music/2_06_Shootout.mp3" },
//    { name: "The Trash Compactor", url: "/static/music/2_07_Trash_Compactor.mp3" },
//    { name: "Tractor Beam/Chasm Crossfire", url: "/static/music/2_08_Tractor_Beam.mp3" },
//    { name: "Ben Kenobi's Death/Tie Fighter Attack", url: "/static/music/2_09_Ben_Kenobi_s_Death.mp3" },
//    { name: "The Battle of Yavin", url: "/static/music/2_10_Battle_of_Yavin.mp3" },
//    { name: "Throne Room (End Titles)", url: "/static/music/2_11_Throne_Room.mp3" },
//    { name: "Binary Sunset (Alternative)", url: "/static/music/1_13_Binary_Sunset_Alternative.mp3" }
//]);


// This is the list of tracks I'm using to publish to azure. I don't want to pay for the bandwidth to stream
// these and I'm heavily capped on the free instance, so I'm hosting all my static media on github pages,
// instead, which doesn't appear to care how much bandwidth I use. 

// At lest, not as far as I can tell. I'm sure I'll get a nastygram at some point, but I'll probably last until
// after the contest. 

// I hope. 

var JukeboxTracks = Object.freeze([
    { name: "20th Century-Fox Fanfare", url: "http://randolpho.github.io/ask-3po/bg/1_01.mp3" },
    { name: "Main Title/Rebel Blockade Runner", url: "http://randolpho.github.io/ask-3po/bg/1_02.mp3" },
    { name: "Imperial Attack", url: "http://randolpho.github.io/ask-3po/bg/1_03.mp3" },
    { name: "Dune Sea of Tatooine/Jawa Sandcrawler", url: "http://randolpho.github.io/ask-3po/bg/1_04.mp3" },
    { name: "The Moisture Farm", url: "http://randolpho.github.io/ask-3po/bg/1_05.mp3" },
    { name: "Hologram/Binary Sunset", url: "http://randolpho.github.io/ask-3po/bg/1_06.mp3" },
    { name: "Landspeeder Search/Attack of the Sand People", url: "http://randolpho.github.io/ask-3po/bg/1_07.mp3" },
    { name: "Tales of a Jedi Knight/Learn About the Force", url: "http://randolpho.github.io/ask-3po/bg/1_08.mp3" },
    { name: "Burning Homestead", url: "http://randolpho.github.io/ask-3po/bg/1_09.mp3" },
    { name: "Mos Eisley Spaceport", url: "http://randolpho.github.io/ask-3po/bg/1_10.mp3" },
    { name: "Cantina Band", url: "http://randolpho.github.io/ask-3po/bg/1_11.mp3" },
    { name: "Cantina Band, No. 2", url: "http://randolpho.github.io/ask-3po/bg/1_12.mp3" },
    { name: "Princess Leia's Theme", url: "http://randolpho.github.io/ask-3po/bg/2_01.mp3" },
    { name: "Millennium Falcon/Imperial Cruiser Pursuit", url: "http://randolpho.github.io/ask-3po/bg/2_02.mp3" },
    { name: "Destruction of Alderaan", url: "http://randolpho.github.io/ask-3po/bg/2_03.mp3" },
    { name: "Death Star/The Stormtroopers", url: "http://randolpho.github.io/ask-3po/bg/2_04.mp3" },
    { name: "Wookiee Prisoner/Detention Block Ambush", url: "http://randolpho.github.io/ask-3po/bg/2_05.mp3" },
    { name: "Shootout in the Cell Bay/Dianoga", url: "http://randolpho.github.io/ask-3po/bg/2_06.mp3" },
    { name: "The Trash Compactor", url: "http://randolpho.github.io/ask-3po/bg/2_07.mp3" },
    { name: "Tractor Beam/Chasm Crossfire", url: "http://randolpho.github.io/ask-3po/bg/2_08.mp3" },
    { name: "Ben Kenobi's Death/Tie Fighter Attack", url: "http://randolpho.github.io/ask-3po/bg/2_09.mp3" },
    { name: "The Battle of Yavin", url: "http://randolpho.github.io/ask-3po/bg/2_10.mp3" },
    { name: "Throne Room (End Titles)", url: "http://randolpho.github.io/ask-3po/bg/2_11.mp3" },
    { name: "Binary Sunset (Alternative)", url: "http://randolpho.github.io/ask-3po/bg/1_13.mp3" }
]);

var FriendList = Object.freeze([
    {
        name: "Beaker",
        img: "http://randolpho.github.io/ask-3po/static/img/beaker.jpg",
        width: 240,
        height: 218,
        words: [
            "Mee-me-meep-mee-me-me.",
            "Mee me. Mee-mo-meeeee. Meeee!!"
        ]
    },
    {
        name: "Boomhauer",
        img: "http://randolpho.github.io/ask-3po/static/img/boomhauer.png",
        width: 240,
        height: 320,
        words: [
            "With them dang ol' sticks and bags and Whack! Whack! man, go Woooo-loo-loo-loo!",
            "Dang ol she can't speak dang 'ol like we do man but dang 'ol tell you what man she speak the language of love man.",
        ]
    },
    {
        name: "Charley Brown's dad",
        img: "http://randolpho.github.io/ask-3po/static/img/charley brown.jpg",
        width: 327,
        height: 360,
        words: [
            "Mwa wa mwa wa, wa wa mwaaaa.",
            "Mwa mwa mwa. Wa mwa waaa mwa."
        ]
    },
    {
        name: "The Sweedish Chef",
        img: "http://randolpho.github.io/ask-3po/static/img/chef.jpg",
        width: 240,
        height: 300,
        words: [
            "Gersh gurndy morn-dee burn-dee, burn-dee, flip-flip-flip-flip-flip-flip-flip-flip-flip.",
            "Børk! Børk! Børk!"
        ]
    },
    {
        name: "Chewbacca",
        img: "http://randolpho.github.io/ask-3po/static/img/chewbacca.png",
        width: 174,
        height: 360,
        words: [
            "Graaphrgh! Grwaaaawl, grph arawol.",
            "Graww phlgulp garar rrrr rr rrrr!"
        ]
    },
    {
        name: "Cousin Itt",
        img: "http://randolpho.github.io/ask-3po/static/img/cousin it.jpg",
        width: 240,
        height: 158,
        words: [
            "Uts sfoo dedidivuh PAH!",
            "Fize fiz d'fide fuh dehdu d'foo hahie ehh!"
        ]
    },
    {
        name: "Captain Dathon",
        img: "http://randolpho.github.io/ask-3po/static/img/dathon.jpg",
        width: 229,
        height: 220,
        words: [
            "Temba, his arms wide.",
            "Darmok and Jalad at Tanagra.",
            "Mirab, his sails unfurled.",
            "Sokath, his eyes uncovered!"
        ]
    },
    {
        name: "Gary",
        img: "http://randolpho.github.io/ask-3po/static/img/gary.jpg",
        width: 240,
        height: 207,
        words: ["Meow."]
    },
    {
        name: "Hodor",
        img: "http://randolpho.github.io/ask-3po/static/img/hodor.jpg",
        width: 240,
        height: 326,
        words: [
            "Hodor.",
            "Hodor, hodor! Hodor."
        ]
    },
    {
        name: "Kenny",
        img: "http://randolpho.github.io/ask-3po/static/img/kenny.png",
        width: 240,
        height: 324,
        words: [
            "Mymm mipf mo muv muphy!",
            "Mmphn frphha herrpha."
        ]
    },
    {
        name: "The Librarian",
        img: "http://randolpho.github.io/ask-3po/static/img/librarian.jpg",
        width: 240,
        height: 246,
        words: [
            "Oook.",
            "Oook ook eek ook. Oooook!"
        ]
    },
    {
        name: "Mushmouth",
        img: "http://randolpho.github.io/ask-3po/static/img/mushmouth.jpg",
        width: 240,
        height: 166,
        words: [
            "Budeep a bubba da beep my lubba.",
            "Dobe notbe libeben tobe boombe habe werbe. Hebe nebeberbe mabekebe sebens.",
            "Kebe nybe habe sebe abe dibe rtbe mobe thebe."
        ]
    },
    {
        name: "The Pyro",
        img: "http://randolpho.github.io/ask-3po/static/img/pyro.png",
        width: 240,
        height: 252,
        words: [
            "Bwauuun, bwaanana!",
            "Mmph mmmph mphfrph!",
            "Mhnk nhya mgh mhph."
        ]
    },
    {
        name: "Q-Bert",
        img: "http://randolpho.github.io/ask-3po/static/img/qbert.jpg",
        width: 240,
        height: 267,
        words: ["@!*?@!"]
    },
    {
        name: "R2D2",
        img: "http://randolpho.github.io/ask-3po/static/img/r2d2.JPG",
        width: 233,
        height: 360,
        words: ["Beep beep boop beep!", "Beepeepbeepwaaaaaaawebeep"]
    },
    {
        name: "Schnitzel",
        img: "http://randolpho.github.io/ask-3po/static/img/shnitzel.png",
        width: 228,
        height: 360,
        words: ["Radda radda radda radda!", "Radda. Radda radda radda radda.", "Radda radda?"]
    }
]);

var SoundEffects = Object.freeze({
    hello: "http://randolpho.github.io/ask-3po/static/sound/hello.mp3",
    saberOn: "http://randolpho.github.io/ask-3po/static/sound/saber_on.mp3",
    saberOff: "http://randolpho.github.io/ask-3po/static/sound/saber_off.mp3"
});