const { Item, } = require("../models");

const itemdata = [
    {
    name: "Witches Brew",
    description: "5oz wood-wicked candle, scent of cinnamon, sandalwood, fall",
    price: 17,
    collection_id: 3
    },
{
    name: "Autumn Breeze",
    description: "16oz fall scented candle, unknown maker, purchased at TJ Max",
    collection_id: 3
}
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;