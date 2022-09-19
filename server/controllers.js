const express = require('express')
const controllers = express.Router()

controllers.get('/', (req, res) => {
  const viewData = res.viewData

  viewData.test = 'test123'

  res.render('home', viewData)
})

module.exports = controllers
