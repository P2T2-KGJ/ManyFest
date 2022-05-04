const { Collection, Item } = require('../models');

const collectionData = [
  {
    name: 'Shirts',
    description: 'A collection of my shirts',
    public: true,
    user_id: '1'
  },
  {
    name: 'Dog Pictures',
    description: 'A collection of my favorite dog pictures',
    public: false,
    user_id: '1'
  },
  {
    name: 'Candles',
    description: 'My different candles and their scents',
    public: true,
    user_id: '1'
  },
 
];

const seedCollections = () => Category.bulkCreate(collectionData);

module.exports = seedCollections;