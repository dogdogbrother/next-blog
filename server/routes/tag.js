const Router = require('koa-router')
const jwt = require('koa-jwt')
const { list, add } = require('../controllers/tag')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/tag'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.get('/', _auth, list)
router.post('/', _auth, add)

module.exports = router