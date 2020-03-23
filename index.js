const express = require('express');

const app = express();

const routesConfig = require('./routes/routes');

routesConfig.routes().forEach(route => {
    route.register(app);
});

app.listen(3000);