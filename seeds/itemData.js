const { Item } = require("../models");

const itemdata = [
    {
        name: "Witches Brew",
        description:
            "5oz wood-wicked candle, scent of cinnamon, sandalwood, fall",
        // price: 17,
        collection_id: 3,
    },
    {
        name: "Autumn Breeze",
        description:
            "16oz fall scented candle, unknown maker, purchased at TJ Max",
        collection_id: 3,
    },
    {
        name: "Glass Jar Berry Mandarin Candle",
        description:
            "This scented candle infuses your home with a blend of berry and mandarin scents that create an inviting ambience you’re sure to appreciate.",
        collection_id: 3,
    },
    {
        name: "Yankee Candle Balsam & Cedar",
        description:
            "Top: Crisp Citrus, Herbs, Red Berry Mid: Pine Balsam, Cedar, Sandalwood Base: Vanilla, Warm Amber, Musk.",
        collection_id: 3,
    },
];

const seedItems = () => Item.bulkCreate(itemdata);

module.exports = seedItems;
