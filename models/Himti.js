const {DataTypes} = require('sequelize');

const Database = require('../config/database');


const HimtiSchema = Database.define('himti', {
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
  },
    name: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    category: DataTypes.STRING,
    categoryid : DataTypes.INTEGER,
    deletedAt: DataTypes.DATE,
});

module.exports = HimtiSchema;