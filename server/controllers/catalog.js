const { Catalog } = require('../models/index')

class CatalogCtl {
  async list(ctx) {
    const catalog = await Catalog.findAll({})
    ctx.body = catalog
  }

  async add(ctx) {
    ctx.verifyParams({
      catalogName: { type: 'string', required: true },  // 目录名
      describe: { type: 'string', required: true },  // 描述说明
      colorTheme: { type: 'string', required: true },  // 文章颜色,有bright和dark
    })
    const { body: query } = ctx.request
    const {
      catalogName,
      subject,
      url
    } = query
    // 如果没有输入主题 默认主题为目录名称
    if (!subject) {
      query.subject = catalogName
    }
    if (!url) {
      const random = Math.floor(Math.random() * 4)
      query.url = `/img/login-bg-${random}.jpg`
    }
    const[, created] = await Catalog.findOrCreate({
      where: {
        catalogName
      },
      defaults: query
    })
    if (!created) {
      return ctx.throw(409, '用户名已占用')
    }
    ctx.status = 201
  }
}

module.exports = new CatalogCtl()