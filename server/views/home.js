const { html, css } = require('../magic')

const style = css`
  background-color: green;

  h1 {
    margin: 0;
  }
`

function home(pdict) {
  return html`
    <main class=${style}>
      <a href="/about.html">about</a>
      <div>home page</div>
      <div>${pdict.test}</div>
      <div class="jquery"></div>
    </main>
  `
}

module.exports = home
