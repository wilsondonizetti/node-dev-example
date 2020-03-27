const express = require('express');

const routes = express.Router();

const OngController = require('../controllers/OngController');

routes.post('/ongs', OngController.saveOng);
routes.get('/ongs', OngController.getOngs);

module.exports = routes;