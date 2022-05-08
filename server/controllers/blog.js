const { Blog, TagRelation } = require('../models/index')

class BlogCtl {
  async add(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      content: { type: 'string', required: true }, 
      catalogId: { type: 'string', required: true },
      tags: { type: 'array', required: true },
    })
    const { tags, title, content, catalogId } = ctx.request.body
    const { id: userId } = ctx.state.user

    const[{ id: blogId }, created] = await Blog.findOrCreate({
      where: {
        title
      },
      defaults: { title, content, catalogId, userId }
    })
    if (!created) {
      return ctx.throw(409, '文章名已占用')
    }
    await TagRelation.bulkCreate(tags.map(tagId => ({
      tagId,
      catalogId,
      blogId
    })))  
    ctx.status = 201
  }

  async list(ctx) {
    ctx.body = []
  }
}

module.exports = new BlogCtl()