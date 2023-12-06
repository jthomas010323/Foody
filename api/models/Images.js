"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Images extends Model {}

  Images.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Images",
    }
  );

  Images.associate = (models) => {
    // associations can be defined here
  };

  return Images;
};
