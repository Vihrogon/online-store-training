const html = require('htm').bind(require('vhtml'));
const { css } = require('@emotion/css');

const style = css`
    background-color: gray;
`;

const home = (pdict) => html`
  <main class="main ${style}">
    <div>test: ${pdict.test}</div>
  </main>
`;

module.exports = home;