const { Router } = require('express');
const AgenciaController = require('../Controller/agenciaController.js');
const BancoController = require('../Controller/bancoController.js');
const ClientesController = require('../Controller/clienteController.js');
const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: console.log(req.body) });
})

routes.get('/agencia', AgenciaController.getAll)
routes.post('/agencia', AgenciaController.insert);

routes.get('/banco', BancoController.getAll)
routes.post('/banco', BancoController.insert);

routes.get('/cliente', ClientesController.getAll)
routes.post('/cliente', ClientesController.insert);

module.exports = routes;