"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
});
module.exports = sequelize;