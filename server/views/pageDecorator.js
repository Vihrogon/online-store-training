const { html } = require('../magic')
const header = require('./header')
const footer = require('./footer')

function pageDecorator(content, pdict) {
  return html`
    <html lang=${pdict.locale}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Store Training</title>
        <link rel="stylesheet" href="/styles/main.css" />
        <script
          src="https://code.jquery.com/jquery-3.6.1.js"
          integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
          crossorigin="anonymous"
        ></script>
        <script type="module" src="/scripts/main.js"></script>
      </head>
      <body>
        <${header} ...${pdict} />
        <${content} ...${pdict} />
        <${footer} ...${pdict} />
      </body>
    </html>
  `
}

module.exports = pageDecorator
