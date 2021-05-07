const { Agencia } = require('../models/');

class AgenciaController {
    async getAll(req, res) {
        try {
            const agencia = await Agencia.findAll();
            return res.status(200).json(agencia);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    async insert(req, res) {
        console.log(req.body.nome)
        try {
            const agencia = Agencia.create(req.body);
            return res.status(200).json(agencia);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }
}

module.exports = new AgenciaController();