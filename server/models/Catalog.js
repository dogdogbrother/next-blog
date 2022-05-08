const seq = require('../db/seq')
const { STRING, ENUM, INTEGER } = require('../db/types')

const Catalog = seq.define('catalog', {
  catalogName: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '博客目录名'
  },
  url: {
    type: STRING,
    allowNull: false,
    comment: 'banner图片地址'
  },
  subject: {
    type: STRING,
    allowNull: false,
    comment: '主题'
  },
  describe: {
    type: STRING,
    allowNull: true,
    comment: '描述'
  },
  colorTheme: {
    type: ENUM('bright', 'dark'),
    allowNull: false,
    comment: '主题和描述的文章颜色'
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户id'
  },
})

module.exports = Catalog