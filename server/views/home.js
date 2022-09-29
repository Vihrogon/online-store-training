const { html, css } = require("../magic");

const style = css`
  h1 {
    margin: 0;
  }
  /* Containers */

  .container-large {
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .container-medium {
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
  }

  /* Slider */

  .slider {
    height: 40.5rem;
    background-image: url("./img/Slider-Hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding-top: 132px;
  }

  .slider-text {
    position: absolute;
    right: 8%;
  }

  .slider-text p {
    font-size: 30px;
    font-weight: 300;
    color: #ffffff;
  }

  .slider-text h1 {
    font-size: 42px;
    font-weight: 600;
    color: #ffffff;
    margin: 40px 0 25px 0;
  }

  .slider-text label {
    font-size: 19px;
    font-weight: 300;
    color: #ffffff;
  }

  .slider-text a {
    margin-top: 35px;
    font-size: 14px;
    font-weight: 400;
    display: block;
    width: 115px;
    height: 34px;
    color: #fff;
    border: 1px solid #fd696a;
    text-decoration: none;
    padding: 8px 26px;
    background-color: #fd696a;
    box-shadow: 1px 2px 3px 0px #1f1f1f;
  }

  .slider-actions {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 340px;
  }

  .slider-actions button {
    width: 50px;
    height: 50px;
    border: none;
    margin: 0 83px 0 83px;
    border-radius: 40px;
    cursor: pointer;
    padding: 6px 0 0 0;
  }

  .section-info {
    width: 100%;
  }

  .col-1 {
    flex: 1 0 21%;
    height: 100%;
    width: 150px;
  }

  .col-2 {
    flex: 1 0 21%;
    height: 100%;
    width: 150px;
  }

  .col-3 {
    flex: 1 0 21%;
    height: 100%;
    width: 150px;
  }

  .col-4 {
    flex: 1 0 21%;
    height: 100%;
    width: 150px;
  }

  /* Section Info */

  .section-info {
    padding: 36px 0 22px 0;
  }

  .info-grid {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
  }

  .info-card {
    font-size: 10px;
    margin-bottom: 30px;
  }

  .info-card h6 {
    margin: 8px 0 12px 0;
  }

  .info-card p {
    margin: 0;
  }

  .separator {
    color: #c0c0c0;
    width: 920px;
    height: 2px;
    margin: 0 auto;
  }
  /* Section Promotion */

  .section-promotion {
    max-width: 100%;
    height: 367px;
  }

  .promotion-hero {
    background-image: url("./img/promotion-hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 100%;
    padding-top: 35px;
  }

  .promotion-actions {
    display: flex;
    float: right;
  }

  .content {
    width: 295px;
  }

  .content h2 {
    font-size: 32px;
    line-height: 40px;
    margin: 0;
  }

  .content a {
    margin-top: 35px;
    font-size: 14px;
    font-weight: 400;
    width: 98px;
    height: 34px;
    color: #fff;
    border: 1px solid #1f1f1f;
    text-decoration: none;
    padding: 8px 26px;
    background-color: #1f1f1f;
    box-shadow: 1px 2px 3px 0px #1f1f1f;
  }

  .promotion-timer {
    margin: 15px 0 27px 0;
  }

  .promotion-timer h1 {
    font-size: 36px;
    color: #fe6f61;
  }

  .promotion-timer p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 500;
  }

  .promotion-picture {
    margin-right: 105px;
  }
`;

function home(pdict) {
  return html`
    <body>
      <main class=${style}>
        <section class="slider">
          <div class="container-large">
            <div class="slider-text">
              <p>Hurry up! Limited time offer.</p>

              <h1>Women Sportswear Sale</h1>

              <label>Sneakers, Keds, Sweatshirts, Hoodies & much more...</label>

              <a href="#">Shop Now</a>
            </div>
            <div class="slider-actions">
              <button><img src="./icons/left-arrow.svg" /></button>

              <button><img src="./icons/right-arrow.svg" /></button>
            </div>
          </div>
        </section>
        <section class="section-info">
          <div class="container-medium">
            <div class="info-grid">
              <div class="col-1">
                <div class="info-card">
                  <img src="./icons/shipping-icon.svg" />

                  <h6>Free Shipping</h6>

                  <p>From all orders over $100</p>
                </div>
              </div>

              <div class="col-2">
                <div class="info-card">
                  <img src="./icons/return-icon.svg" />

                  <h6>Free Returns</h6>

                  <p>Return money within 30 days</p>
                </div>
              </div>

              <div class="col-3">
                <div class="info-card">
                  <img src="./icons/secure-icon.svg" />

                  <h6>Secure Shopping</h6>

                  <p>You're in safe hands</p>
                </div>
              </div>

              <div class="col-4">
                <div class="info-card">
                  <img src="./icons/style-icon.svg" />

                  <h6>Over 10,000 Styles</h6>

                  <p>We have everything you need</p>
                </div>
              </div>
            </div>
            <hr class="separator" />
          </div>
        </section>

        <section class="section-promotion">
          <div class="container-large">
            <div class="promotion-hero">
              <div class="promotion-actions">
                <div class="content">
                  <h2>Get -50% from Summer Collection</h2>
                  <div class="promotion-timer">
                    <h1>10 : 14 : 43 : 28</h1>
                    <p>days hours minutes seconds</p>
                  </div>
                  <a href="#">Shop Now</a>
                </div>

                <div class="promotion-picture">
                  <img
                    src="./img/promotion-picture.png"
                    alt=""
                    width="257"
                    height="252"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  `;
}

module.exports = home;
