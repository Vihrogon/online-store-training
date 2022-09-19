/**
 * TODO
 * @param {String} filePath
 * @param {Object} pdict
 * @param {Function} callback
 * @returns
 */
function viewEngine(filePath, pdict, callback) {
  const { renderStylesToString } = require('@emotion/server')
  const pageDecorator = require('./views/pageDecorator')

  const module = require(filePath)

  const decoratedPage = pageDecorator(module, pdict)

  const styledPage = renderStylesToString(decoratedPage)

  return callback(null, '<!DOCTYPE html>' + styledPage)
}

/**
 * TODO
 */
const html = require('htm').bind(require('vhtml'))

/**
 * TODO
 */
const { css } = require('@emotion/css')

/**
 * TODO
 * @param {Express.Request} req
 * @param {Express.Response} res
 * @param {Function} next
 */
const localeCookie = (req, res, next) => {
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
  viewEngine,
  html,
  css,
  localeCookie
}

// compacted version
// module.exports = {
//   html: require('htm').bind(require('vhtml')),
//   css: require('@emotion/css').css,
//   viewEngine: function (filePath, pdict, callback) {
//     return callback(
//       null,
//       '<!DOCTYPE html>' +
//         require('@emotion/server').renderStylesToString(
//           require('./views/pageDecorator')(require(filePath), pdict)
//         )
//     )
//   }
// }
