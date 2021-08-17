const Sequelize = require("sequelize")

const user = "dzzdstmdnmcush"
const password = "e38a98fa2f1185dd99f73d1f2f55db5081ebe21bf8764d96ec2417f07cb85e1b"
const host = "ec2-54-173-31-84.compute-1.amazonaws.com"
const database = "darjfpu38chf08"

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "postgres",
  protocol: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

module.exports = sequelize