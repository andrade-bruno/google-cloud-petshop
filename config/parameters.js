const dotenv = require('dotenv')

dotenv.config()

const parameters = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  database: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
  },
  server: {
    SVC_BASE_URL: process.env.SVC_BASE_URL,
    SVC_PORT: process.env.SVC_PORT
  }
}

module.exports = parameters
