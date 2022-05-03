

class CatalogCtl {
  async add(ctx) {
    ctx.body = 123
  }
}

module.exports = new CatalogCtl()