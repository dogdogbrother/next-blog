const seq = require('../db/seq')
const { STRING, ENUM, INTEGER } = require('../db/types')
const Tag = seq.define('tag', {
  tagName: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '标签名'
  },
  tagColor: {
    type: ENUM('magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'),
    allowNull: false,
    comment: '标签颜色'
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: '用户id'
  },
})

module.exports = Tag