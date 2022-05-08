const Router = require('koa-router')
const jwt = require('koa-jwt')
const { add, list } = require('../controllers/blog')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/blog'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.post('/', _auth, add)
router.get('/', list)

module.exports = router