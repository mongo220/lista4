const { Clientes } = require('../models/');

class ClientesController {
    async getAll(req, res) {
        try {
            const cliente = await Clientes.findAll();
            return res.status(200).json(cliente);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    async insert(req, res) {
        console.log(req.body.nome)
        try {
            const cliente = Clientes.create(req.body);
            return res.status(200).json(cliente);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }
}

module.exports = new ClientesController();