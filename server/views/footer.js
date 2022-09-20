const { html, css } = require('../System')

const style = css`
  background-color: red;
`

module.exports = (pdict) => html`<footer class=${style}>Footer</footer>`
