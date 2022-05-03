const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Item extends Model {}

Item.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        collection_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "collections",
                key: "id",
            },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: "items",
    }
);

module.exports = Item;
