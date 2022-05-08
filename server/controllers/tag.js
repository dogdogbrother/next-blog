const { Tag } = require('../models/index')

class TagCtl {
  
  async list(ctx) {
    const tags = await Tag.findAll({})
    ctx.body = tags
  }
  async add(ctx) {
    ctx.verifyParams({
      tagName: { type: 'string', required: true },  // 标签名
      tagColor: { type: 'string', required: true },  // 标签颜色
    })
    const { tagName, tagColor} = ctx.request.body
    const { id: userId } = ctx.state.user
    const [, created] = await Tag.findOrCreate({
      where: {
        tagName
      },
      defaults: { tagName, tagColor, userId }
    })
    if (!created) {
      return ctx.throw(409, '标签名重复')
    }
    ctx.body = 201
  }
}

module.exports = new TagCtl()