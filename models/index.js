const Collection = require('./collections');
const User = require('./users');
const Item = require('./items');

User.hasMany (Collection, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Collection.belongsTo (User, {
    foreignKey: 'user_id',
    unique: false,
})

Collection.hasMany (Item, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Item.belongsTo (Collection, {
    foreignKey: 'user_id',
    unique: false,
})

module.exports = { User, Item, Collection }