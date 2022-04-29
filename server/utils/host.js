const dev = process.env.NODE_ENV !== 'production'

const HOST = dev ? "http://localhost:7001" : "https://file.freetoplay.top/word"

module.exports = HOST