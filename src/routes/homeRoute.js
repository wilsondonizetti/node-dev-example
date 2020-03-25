const express = require('express');

const routes = express.Router();

const homeController = require('../controllers/homeController');

routes.get('/', homeController.index);
routes.get('/about', homeController.about);

module.exports = routes;