
class UploadCtl {
  async uploadImg(ctx) {
    const file = ctx.req.files['file']
    const filePath = file.path.split('/public')[1]
    ctx.body = filePath
  }
}

module.exports = new UploadCtl()