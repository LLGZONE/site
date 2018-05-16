const Sequelize = require("sequelize");
module.exports = (app, config) => {
  const sequelize = new Sequelize("site", "yj", "yjmima", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  const User = sequelize.define("user", {
    username: Sequelize.STRING,
    password: Sequelize.DATE
  });
};
