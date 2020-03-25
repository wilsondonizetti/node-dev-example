const express = require('express');

const app = express();

const dadosRoutes = require('./routes/dadosRoute');
const homeRoutes = require('./routes/homeRoute');

app.use(express.json());

app.use(dadosRoutes);
app.use(homeRoutes);

app.listen(3000);