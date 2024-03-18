const Sequelize = require('sequelize')
const parameters = require('../../config/parameters')

const instancia = new Sequelize(
  parameters.database.DB_NAME,
  parameters.database.DB_USER,
  parameters.database.DB_PASSWORD,
  {
    dialect: 'mysql',
    host: parameters.database.DB_HOST
  }
)

module.exports = instancia
