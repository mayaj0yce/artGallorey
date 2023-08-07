const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Art extends Model {}

Art.init(
    {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'art'
}
);

module.exports = Art;