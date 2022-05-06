const { Image } = require("../models");

const imagedata = [
    {
        // image seeds go here
    }
]


const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
