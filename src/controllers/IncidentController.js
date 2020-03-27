const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;

        const ongId = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ongId
        });

        return response.json({ id });
    },
    async incidents(request, response){
        const result = await connection('incidents').select('*');

        response.json(result);
    },
    async incidentsByOngId(request, response){
        const ongId = request.headers.authorization;
        const result = await connection('incidents').where('ongId', ongId).select('*');

        response.json(result);
    }
}