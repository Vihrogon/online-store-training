const { html, css } = require('../System')

function header(pdict) {
  const style = css`
    background-color: var(--primary-bg);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    .menu-button {
      width: 2rem;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      & > div {
        content: '';
        display: block;
        width: 100%;
        height: 20%;
        background-color: black;
        border-radius: 0.25rem;
      }
    }

    .menu-container {
      display: none;
    }
  `

  return html`
    <header class=${style}>
      <img src="./img/logo.png" alt="site logo" />
      <div class="menu-button" id="hamburger-button">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="menu-container">menu</div>
    </header>
  `
}
module.exports = header
