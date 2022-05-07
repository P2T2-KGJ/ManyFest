const { Image } = require("../models");

const imagedata = [
    {
        name: "Glass Jar Berry Mandarin Candle - Front",
        description: "The front of the candle.",
        link: "https://target.scene7.com/is/image/Target/GUEST_12f60b4f-9c65-40bc-8daa-19556dbcfb4b?wid=325&hei=325&qlt=80&fmt=pjpeg",
        item_id: 3,
    },
    {
        name: "Glass Jar Berry Mandarin Candle - Back",
        description: "The back of the candle.",
        link: "https://target.scene7.com/is/image/Target/GUEST_a93a854b-d39c-4455-8a36-3cfd98bcee80?wid=325&hei=325&qlt=80&fmt=pjpeg",
        item_id: 3,
    },
    {
        name: "Glass Jar Berry Mandarin Candle - Side",
        description: "The side of the candle.",
        link: "https://target.scene7.com/is/image/Target/GUEST_a8ba25d0-fd9b-4e81-982a-fdb9fc6c6366?wid=325&hei=325&qlt=80&fmt=pjpeg",
        item_id: 3,
    },
    {
        name: "Glass Jar Berry Mandarin Candle - Top",
        description: "The top of the candle.",
        link: "https://target.scene7.com/is/image/Target/GUEST_ee45847d-2130-4e2e-a61b-4161f326ea5b?wid=325&hei=325&qlt=80&fmt=pjpeg",
        item_id: 3,
    },
    {
        name: "Glass Jar Berry Mandarin Candle - Bottom",
        description: "The bottom of the candle.",
        link: "https://target.scene7.com/is/image/Target/GUEST_09c4280d-c51a-4d33-aeaf-8bda73cb1b13?wid=325&hei=325&qlt=80&fmt=pjpeg",
        item_id: 3,
    },
    {
        name: "Balsam & Cedar - Front",
        description: "The front of the candle.",
        link: "https://yankeecandle.scene7.com/is/image/YankeeCandle/1121422_silho?wid=180&hei=180",
        item_id: 4,
    },
    {
        name: "Balsam & Cedar - Lit",
        description: "The candle lit.",
        link: "https://yankeecandle.scene7.com/is/image/YankeeCandle/256875_013_r1_cropped?wid=180&hei=180",
        item_id: 4,
    },
]


const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
