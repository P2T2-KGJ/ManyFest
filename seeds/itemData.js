const { Item, } = require("../models");

const itemdata = [
    {
    name: "Witches Brew",
    description: "5oz wood-wicked candle, scent of cinnamon, sandalwood, fall",
    price: 17
    },
{
    name: "Autumn Breeze",
    description: "16oz fall scented candle, unknown maker, purchased at TJ Max"
}
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;