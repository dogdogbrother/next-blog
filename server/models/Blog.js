const seq = require('../db/seq')
const { STRING, INTEGER } = require('../db/types')

const Blog = seq.define('blog', {
  title: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '博客名'
  },
  content: {
    type: STRING(10000),
    allowNull: false,
    comment: '博客内容'
  },
  catalogId: {
    type: INTEGER,
    allowNull: false,
    comment: '博客所属目录'
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  coverUrl: {
    type: STRING,
    allowNull: true,
    comment: '博客封面'
  }
})

module.exports = Blog