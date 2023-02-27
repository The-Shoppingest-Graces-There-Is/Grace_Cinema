const Sequelize = require('sequelize');

//remember to change the name of your db to what you want it to be!
const db = new Sequelize(process.env.DATABASE_URL, { logging: false } || 'postgres://localhost:5432/grace_cinema');

module.exports = db;
