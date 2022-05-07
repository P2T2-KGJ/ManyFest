const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model {}

Image.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        link : {type: DataTypes.STRING,
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "items",
                key: "id",
            },
        },
    },
    {
        sequelize,
        underscored: true,
        modelName: "images",
    }
);

module.exports = Image;
