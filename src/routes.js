const express = require('express');

const routes = express.Router();

const homeController = require('./controllers/homeController');
const dadosController = require('./controllers/dadosController');

routes.get('/', homeController.index);
routes.get('/about', homeController.about);

routes.get('/dados/evento', dadosController.getEvento);
routes.get('/dados', dadosController.getDados);
routes.get('/dados/:id', dadosController.getDadosById);

module.exports = routes;