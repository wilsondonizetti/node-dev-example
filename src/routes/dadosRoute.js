const express = require('express');

const routes = express.Router();

const DadosController = require('../controllers/DadosController');

routes.get('/dados/evento', DadosController.getEvento);
routes.get('/dados', DadosController.getDados);
routes.get('/dados/:id', DadosController.getDadosById);

module.exports = routes;