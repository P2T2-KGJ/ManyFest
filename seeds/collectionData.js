const { Collection } = require("../models");

const collectiondata = [
    {
        name: "Shirts",
        description: "A collection of my shirts",
        user_id: 2,
    },
    {
        name: "Dog Pictures",
        description: "A collection of my favorite dog pictures",
        private: true,
        user_id: 1,
    },
    {
        name: "Candles",
        description: "My different candles and their scents",
        user_id: 2,
    },
]

const seedCollections = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollections;
