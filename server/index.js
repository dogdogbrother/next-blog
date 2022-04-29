const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const parameter = require('koa-parameter')
const next = require('next')
const routing = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3000
// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const server = new Koa()
  server.use(bodyparser())
  server.use(parameter(server))
  routing(server)
  server.use(async (ctx, _next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.listen(PORT, () => {
    console.log(`koa server listening on ${PORT}`)
  })
})
