
exports.register = (app) => {
    app.get('/', (request, response) => {
        return response.send('olá');
    });
}

