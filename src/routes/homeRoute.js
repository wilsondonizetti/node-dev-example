const express = require('express');

const routes = express.Router();

const HomeController = require('../controllers/HomeController');

routes.get('/', HomeController.index);
routes.get('/about', HomeController.about);

module.exports = routes;