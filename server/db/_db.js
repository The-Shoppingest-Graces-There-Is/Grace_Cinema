const Sequelize = require('sequelize');


const config = {
  logging: false,
}
 if(process.env.LOGGING){
  delete config.logging;
 }

 if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/grace_cinema', config);

module.exports = db;
