const express = require('express')
const cookieParser = require('cookie-parser')
const { connect } = require('mongoose')
const { viewEngine } = require('./server/System')
const { setLocaleCookie } = require('./server/middleware')
const controllers = require('./server/controllers')
const server = express()

// global.Resources = {
//   en: {},
//   bg: {}
// }

// init the custom view engine
server.engine('js', viewEngine)
server.set('views', './server/views')
server.set('view engine', 'js')

server.use(cookieParser())
// set/read locale cookie middleware
server.use(setLocaleCookie)

server.use(controllers)
server.use(express.static('static'))

// error handling
server.use((req, res, next) => res.redirect('/404.html'))
server.use((err, req, res, next) => res.redirect('/500.html'))

server.listen(3000, async () => {
  await connect('mongodb://127.0.0.1:27017/store').catch((e) => process.exit(1))
  console.log('server listening on port 3000')
})
