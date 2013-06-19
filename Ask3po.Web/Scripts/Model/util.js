var RandomUtil = Object.freeze({
    index: function RandomIndex(items) {
        var index = Math.floor(Math.random() * items.length);
    },
    item: function RandomItem(items) {
        var index = Math.floor(Math.random() * items.length);
        return items[index];
    },
    coinFlip : function CoinFlip() {
        return Math.round(Math.random() * 1)
    }
});