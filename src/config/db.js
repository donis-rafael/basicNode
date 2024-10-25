const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
  String(process.env.BD_NAME),
  String(process.env.BD_USER),
  String(process.env.BD_PASS),
  {
    host: String(process.env.BD_SERVER_NAME),
    port: String(process.env.BD_PORT),
    dialect: String(process.env.BD_DIALECT),
    pool: {
      max: Number(String(process.env.BD_MAX)),
      min: Number(String(process.env.BD_MIN)),
      acquire: Number(String(process.env.BD_ACQUIRE)),
      idle: Number(String(process.env.BD_IDLE)),
    },
  });

console.log('ljflasjfaskldfjakls')
console.log(sequelize)

module.exports = sequelize;