/**
 * TODO
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
const setLocaleCookie = (req, res, next) => {
  let locale = 'en'

  if (req.cookies.locale) {
    locale = req.cookies.locale
  } else {
    res.cookie('locale', 'en')
  }

  res.viewData = { locale }
  next()
}

module.exports = {
  setLocaleCookie
}