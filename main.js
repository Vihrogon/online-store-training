const express = require('express')
const cookieParser = require('cookie-parser')
const { viewEngine, localeCookie } = require('./server/magic')
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
server.use(localeCookie)

server.use(controllers)
server.use(express.static('static'))

// error handling
server.use((req, res, next) => res.redirect('/404.html'))
server.use((err, req, res, next) => res.redirect('/500.html'))

server.listen(3000, () => {
  console.log('listening on 3000')
})
