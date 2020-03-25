const dados = [
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
];

exports.getDados = (request, response) => {
    return response.json(dados);
};

exports.getEvento = (request, response) => {
    return response.json({
        evento: 'Nome do evento',
        aluno: 'Wilson Donizetti'
    });
};

exports.getDadosById = (request, response) => {
    const query = request.params;
    const item = dados.filter(i => i.key == query.id);

    if (query && item) {
        return response.json(item);
    } else {
        return response.send('nenhum dado encontrado');
    }
};