'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      Token.belongsTo(User, {foreignKey: "userId"});
    }
  };
  Token.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
      },
    },
    token: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique: true,
    },
    expiredIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userAgent: DataTypes.STRING,
    fingerprint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};