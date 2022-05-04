const sequelize = require('../config/connection');

const seedCollections = require('./collectionSeeds');
const seedUserData = require('./userData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUserData();
  
    await seedCollections();
    
    process.exit(0);
  
  };
  
  seedDatabase();