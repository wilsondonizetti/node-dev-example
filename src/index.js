const express = require('express');

const app = express();

const dadosRoutes = require('./routes/dadosRoute');
const homeRoutes = require('./routes/homeRoute');
const ongRoutes = require('./routes/ongRoute');
const incidentRoutes = require('./routes/incidentRoute');

app.use(express.json());

app.use(dadosRoutes);
app.use(homeRoutes);
app.use(ongRoutes);
app.use(incidentRoutes);

app.listen(3000);