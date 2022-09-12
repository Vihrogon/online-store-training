const express = require('express');
const { viewEngine } = require('./magic');

const server = express();
const controller = express.Router()

server.engine('js', viewEngine)
server.set('views', './views');
server.set('view engine', 'js');

server.use(controller);
server.use(express.static('static'));

server.listen(3000, () => {
    console.log('server listening on port 3000');
});

controller.get('/', (req, res) => {
    res.render('home', { test: 'test123' });
})
