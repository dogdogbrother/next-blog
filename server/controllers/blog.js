const { Blog, TagRelation, Tag } = require('../models/index')
const { setArr } = require('../utils/index')

class BlogCtl {
  async add(ctx) {
    ctx.verifyParams({
      title: { type: 'string', required: true },
      content: { type: 'string', required: true }, 
      catalogId: { type: 'string', required: true },
      tags: { type: 'array', required: true },
    })
    const { tags, title, content, catalogId, coverUrl = '' } = ctx.request.body
    const { id: userId } = ctx.state.user

    const[{ id: blogId }, created] = await Blog.findOrCreate({
      where: {
        title
      },
      defaults: { title, content, catalogId, userId, coverUrl }
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
    const blogs = await Blog.findAll({})
    const blogIds = blogs.map(blog => blog.id)
    const reletionTag = await TagRelation.findAll({
      where: { blogId: blogIds }
    })
    // 获得下去重后的标签id,用于获取标签表里面的值
    const tagIds = setArr(reletionTag.map(reletion => reletion.tagId))
    const tags = await Tag.findAll({
      where: { id: tagIds }
    })
    // 给 blog 列表增加 tags 字段
    ctx.body = blogs.map(blog => {
      const { id } = blog
      const _reletionTag = reletionTag
        .filter(tag => tag.blogId === id)
        .map(tag => tag.tagId)
      blog.dataValues.tags = tags.filter(tag => _reletionTag.includes(tag.id))
      return blog
    })
  }

  async info(ctx) {
    const { blogId } = ctx.params
    const blog = await Blog.findByPk(blogId)
    ctx.body = blog
  }

  async ids(ctx) {
    const blogs = await Blog.findAll({
      attributes: ['id']
    })
    ctx.body = blogs
  }
}

module.exports = new BlogCtl()