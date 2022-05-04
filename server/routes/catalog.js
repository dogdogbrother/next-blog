const Router = require('koa-router')
const jwt = require('koa-jwt')
const { list, add } = require('../controllers/catalog')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/catalog'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.get('/', list)
router.post('/', _auth, add)

module.exports = router