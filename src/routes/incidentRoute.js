const express = require('express');

const routes = express.Router();

const IncidentController = require('../controllers/IncidentController');

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.incidents);
routes.get('/incidents/list', IncidentController.incidentsByOngId);

module.exports = routes;