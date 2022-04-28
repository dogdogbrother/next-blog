// const Koa = require('koa')
// const bodyparser = require('koa-bodyparser')
// const parameter = require('koa-parameter')
// const routing = require('./routes')

// const app = new Koa()

// app.use(bodyparser())

// app.use(parameter(app))

// routing(app)

// app.listen(7001, () => console.log('7001端口已经开启'))

// server.js

const Koa = require('koa')
const next = require('next')
const routing = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3001
// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const server = new Koa()
  routing(server)
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(PORT, () => {
    console.log(`koa server listening on ${PORT}`)
  })
})
