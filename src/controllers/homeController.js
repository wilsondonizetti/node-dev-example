exports.index = (request, response) => {
    return response.send('olá mundo');
};
exports.about = (request, response) => {
    return response.json({
        name: 'Wilson Donizetti',
        address: 'Minas Gerais - Brasil',
        phone: '+559999999999',
        email: 'email@email.com'
    })
};
