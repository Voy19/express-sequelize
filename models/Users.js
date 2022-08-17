const { Model, DataTypes } = require('sequelize');
const sequelize = require.main.require('./config/sequelize');

class Users extends Model {};

Users.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, { sequelize, modelName: 'users' });

module.exports = Users;
