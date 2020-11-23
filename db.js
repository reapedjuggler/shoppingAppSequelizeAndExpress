const sequelize = require('sequelize')

const db = new sequelize('shopdb', 'shopper', 'sober7226', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { // Can be ignored default values are there
        min: 0,
        max: 5,
    }
});


const User = db.define('users', { // Making a new class and this is a table basically

    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products', { // Same is this one


    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    name: {
        type: sequelize.STRING,
        allowNull: false,
    },

    manuFacturer: {
        type: sequelize.STRING,
    },

    price: {
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    }

});

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.log("Database has not been synced"))


exports = module.exports = {
    User,
    Product,
}