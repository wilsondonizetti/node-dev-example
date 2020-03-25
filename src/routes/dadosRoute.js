const express = require('express');

const routes = express.Router();

const dadosController = require('../controllers/dadosController');

routes.get('/dados/evento', dadosController.getEvento);
routes.get('/dados', dadosController.getDados);
routes.get('/dados/:id', dadosController.getDadosById);

module.exports = routes;