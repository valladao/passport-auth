const Sequelize = require("sequelize")
const sequelize = require("./database.js")

class User extends Sequelize.Model {}

User.init(
  {
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
)
module.exports = User