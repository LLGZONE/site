import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';

const client = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    logging: config.db.logging,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);
var models = {};

// read all models and import them into the "db" object
fs.readdirSync(__dirname + '/models')
  .filter(function(file) {
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach(function(file) {
    var model = client.import(path.join(__dirname + '/models', file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function(modelName) {
  if (models[modelName].options.hasOwnProperty('associate')) {
    models[modelName].options.associate(models);
  }
});

export { models, client };
