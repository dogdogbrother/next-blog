const Router = require('koa-router')
const jwt = require('koa-jwt')
const { register } = require('../controllers/users')
const { _JWT_KEY_ } = require('../conf/secretKeys')

const router = new Router({prefix:'/user'})

const _auth = jwt({ secret: _JWT_KEY_ })

router.get('/register', register)

module.exports = router