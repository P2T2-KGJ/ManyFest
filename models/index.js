const Collection = require("./collection");
const User = require("./user");
const Item = require("./item");
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

Item.hasMany(Image, {
    foreignKey: "item_id",
    onDelete: "CASCADE",
});

Collection.hasMany(Image, {
    foreignKey: "item_id",
    onDelete: "CASCADE",
});

Item.belongsTo(Collection, {
    foreignKey: "collection_id",
    unique: false,
});

Image.belongsTo(Item, {
    foreignKey: "item_id",
    unique: false,
});

module.exports = { User, Collection, Item, Image };
