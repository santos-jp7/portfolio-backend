const {Router} = require('express');
const routes = Router();
const Contact = require('./controllers/Contact')

routes.post('/contact', Contact);

module.exports = routes;