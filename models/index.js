const Collection = require("./Collection");
const User = require("./User");
const Item = require("./Item");
const Image = require("./Image");

User.hasMany(Collection, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Collection.belongsTo(User, {
    foreignKey: "user_id",
    unique: false,
});

Collection.hasMany(Item, {
    foreignKey: "collection_id",
    onDelete: "CASCADE",
});

Item.belongsTo(Collection, {
    foreignKey: "collection_id",
    unique: false,
});

Item.hasMany(Image, {
    foreignKey: "item_id",
    onDelete: "CASCADE",
});

Image.belongsTo(Item, {
    foreignKey: "item_id",
    unique: false,
});

module.exports = { User, Collection, Item, Image };
