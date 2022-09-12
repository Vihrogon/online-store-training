const { css } = require("@emotion/css");
const html = require('htm').bind(require('vhtml'));
const renderStylesToString = require('@emotion/server').renderStylesToString;
const pageDecorator = require('./views/pageDecorator');

function viewEngine(filePath, pdict, callback) {
    const module = require(filePath);

    const decorated = pageDecorator(module, pdict);

    const styled = renderStylesToString(decorated);

    return callback(null, '<!DOCTYPE html>' + styled);
}

module.exports = {
    viewEngine
}