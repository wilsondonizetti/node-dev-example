
exports.register = (app) => {
    app.get('/dados', (request, response) => {
        return response.json([
            {
                key: 1,
                value: 'valor 1'
            },
            {
                key: 2,
                value: 'valor 2'
            },
            {
                key: 3,
                value: 'valor 3'
            },
            {
                key: 4,
                value: 'valor 4'
            },
            {
                key: 5,
                value: 'valor 5'
            }
        ]);
    });

    app.get('/dados/evento', (request, response) => {
        return response.json({
                evento: 'Nome do evento',
                aluno: 'Wilson Donizetti'
            });
    });
}