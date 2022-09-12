const html = require("htm").bind(require("vhtml"));
const { css } = require("@emotion/css");

const style = css`
    :root {
        font-size: 16px;
    }

    body {
        margin: 0px;
    }
`;

function pageDecorator(module, pdict) {
    return html`
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Online Store Training</title>
            <script src="main.js"></script>
        </head>
        
        <body>
            <${module} ...${pdict} />
        </body>
        
        </html>
    `;
}

module.exports = pageDecorator;
