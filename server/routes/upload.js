const Router = require('koa-router')
const jwt = require('koa-jwt')
const { uploadImg } = require('../controllers/upload')
const { _JWT_KEY_ } = require('../conf/secretKeys')
const koaFrom = require('formidable-upload-koa')
const path = require('path')

const router = new Router({prefix:'/upload'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.post('/img', _auth, koaFrom({
  uploadDir: path.resolve(__dirname, '../../public/upload'),  // 文件存放的位置
  keepExtensions: true,  // 包含扩展名
  maxFileSize: 1024 * 1024 * 2  // 大小为 2m
}), uploadImg)

module.exports = router