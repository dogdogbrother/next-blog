const dev = process.env.NODE_ENV !== 'production'
const { DEV_MYSQL_KEY, PROD_MYSQL_KEY } = require('../conf/secretKeys')
let MYSQL_CONF = {
  user: 'root',
  password: DEV_MYSQL_KEY,
  port: '3306',
  database: 'words'
}

if (!dev) {
  MYSQL_CONF = {
    user: 'root',
    password: PROD_MYSQL_KEY,
    port: '3306',
    database: 'words'
  }
}
module.exports = {
  MYSQL_CONF
}