const sequelize = require('../config/connection');

const seedCollections = require('./collectionSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await seedCollections();
    
    process.exit(0);
  
  };
  
  seedDatabase();