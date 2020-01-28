const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("geapp", "root", "110419996kevin", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  },
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
