const { Msg } = require('./System')

/**
 * TODO
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
const setLocale = (req, res, next) => {
  let Locale = 'en'

  if (req.cookies.locale && ['en', 'bg'].includes(req.cookies.locale)) {
    Locale = req.cookies.locale
  } else {
    res.cookie('locale', 'en')
  }

  res.viewData = {
    Locale,
    Msg: Msg.bind(Locale)
  }
  next()
}

module.exports = {
  setLocale
}