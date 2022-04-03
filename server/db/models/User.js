const { compare } = require("bcrypt");
const {Model} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model{
    checkPassword(value){
      return compare(value, this.getDataValue("password"));
    }
    static associate({Contest, Offer, Rating, Token}){
      User.hasMany(Offer, { foreignKey: 'userId'});
      User.hasMany(Contest, { foreignKey: 'userId'});
      User.hasMany(Rating, { foreignKey: 'userId'});
      User.hasMany(Token, { foreignKey: 'userId'});
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'anon.png',
    },
    role: {
      type: DataTypes.ENUM('customer', 'creator'),
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    accessToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "User",
  });
  return User;
}
