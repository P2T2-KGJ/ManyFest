const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {}

// do we want to give collections the option to have an image associated with them?
// we could provide emoji/icons for the user to pic from
// and/or we could let the user select an image from one of the items
// and/or the user could upload an image specifically for the collection

Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // changed this to private instead of public, because public feels like it should be the default
        // added default value so that if no value is passed, it will not reject the addition
        private: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'collections',
    }
);

module.exports = Collection;
