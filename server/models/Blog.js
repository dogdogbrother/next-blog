const seq = require('../db/seq')
const { STRING } = require('../db/types')

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
})

module.exports = Blog