const HelloController = require('../controllers/HelloController');
const DadosController = require('../controllers/DadosController');
exports.routes = () => {
    return [
        HelloController,
        DadosController
    ];
}