const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artwork extends Model {}

Artwork.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}
)