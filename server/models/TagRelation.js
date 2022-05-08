const seq = require('../db/seq')
const { INTEGER } = require('../db/types')

const TagRelation = seq.define('tagRelation', {
  tagId: {
    type: INTEGER,
    allowNull: false,
    comment: '关联的标签'
  },
  catalogId: {
    type: INTEGER,
    allowNull: false,
    comment: '关联的目录'
  },
  blogId: {
    type: INTEGER,
    allowNull: false,
    comment: '关联的博客'
  }
})

module.exports = TagRelation