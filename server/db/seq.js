const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const dev = process.env.NODE_ENV !== 'production'
const { host, user, password, database } = MYSQL_CONF
const conf = {
  host,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  timezone: '+08:00'
}

// 线上环境，使用连接池
if (!dev) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000  // 如果一个连接池 10 s 之内没有被使用，则释放
  }
}

const seq = new Sequelize(database, user, password, conf)

seq.authenticate().then(() => {
  console.log('连接成功')
}).catch((err) => {
  console.log('连接失败',err)
})

module.exports = seq