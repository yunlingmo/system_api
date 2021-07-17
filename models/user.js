"use strict";
const { Model } = require("sequelize");
const md5 = require("../util/md5");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set: function (val) {
          this.setDataValue("password", md5(val));
        },
      },
      bio: DataTypes.TEXT,
      image: DataTypes.STRING,
      lastLogintime: DataTypes.DATE,
      thisLogintime: DataTypes.DATE,
      gender: DataTypes.STRING,
      birdthday: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      force: true
    },
  );
  return User;
};
