const { User } = require('../models/index')
const HOST = require('../utils/host')
const { _JWT_KEY_ } = require('../conf/secretKeys')
const jsonwebtoken = require('jsonwebtoken')
const doCrypto = require('../utils/cryp')
const Sequelize = require('sequelize');
const Op = Sequelize.Op
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

  async login(ctx) {
    ctx.verifyParams({
      username: { type: 'string', required: true },
      password: { type: 'string', required: true },
    })
    const { username, password } = ctx.request.body
    const user = await User.findOne({
      attributes: ['username', 'id', 'nickname', 'avatar' ],
      where: {
        [Op.and]: [{ username },{ password: doCrypto(password) }]
      }
    })
    if (user) {
      const { nickname, id, avatar } = user
      const token = jsonwebtoken.sign(
        { id }, 
        _JWT_KEY_, 
        { expiresIn: '20d' }
      )
      ctx.body = { nickname, id, avatar, token }
    } else {
      return ctx.throw(403, '账户名或者密码错误')
    }
  }
}

module.exports = new UsersCtl()