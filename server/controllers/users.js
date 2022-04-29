const { User } = require('../models/index')
const HOST = require('../utils/host')
const { _JWT_KEY_ } = require('../conf/secretKeys')
const jsonwebtoken = require('jsonwebtoken')
const doCrypto = require('../utils/cryp')
class UsersCtl {
  async register(ctx) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
      confirm: { type: 'string', required: true },
    })
    const { username, password, confirm } = ctx.request.body
    if (password !== confirm) {
      return ctx.throw(403, '两次密码输入不一致')
    }
    const avatarLength = 19
    const avatarIndex = Math.floor(Math.random() * avatarLength)

    const [
      { id, avatar }, 
      created
    ] = await User.findOrCreate({
      where: {
        username
      },
      defaults: {
        password: doCrypto(password),
        avatar: `${HOST}/avatar/${avatarIndex}.jpeg`,
        nickname: username
      }
    })
    if (!created) {
      return ctx.throw(409, '用户名已占用')
    }
    const token = jsonwebtoken.sign(
      { id },
      _JWT_KEY_,
      { expiresIn: '20d' }
    )
    ctx.body = {
      token,
      nickname: username,
      avatar,
      id
    }
  }
}

module.exports = new UsersCtl()