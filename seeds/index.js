const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedCollections = require("./collectionData");
const seedItems = require("./itemData");
const seedImages = require("./imageData");


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedCollections();
    await seedItems();
    // await seedImages();

    process.exit(0);
};

seedDatabase();




