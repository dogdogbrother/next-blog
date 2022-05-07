const seq = require('../db/seq')
const { STRING, ENUM } = require('../db/types')
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
    unique: true,
    comment: '标签颜色'
  },
})

module.exports = Tag