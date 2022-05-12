const Router = require('koa-router')
const jwt = require('koa-jwt')
const { add, list, info, ids } = require('../controllers/blog')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/blog'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.post('/', _auth, add)
router.get('/', list)
router.get('/info/:blogId', info)

router.get('/id', ids)  // 只获取id,用于服务端页面渲染用的
module.exports = router