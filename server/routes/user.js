const Router = require('koa-router')
const jwt = require('koa-jwt')
const { register, login } = require('../controllers/users')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/user'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.post('/register', register)
router.post('/login', login)

module.exports = router