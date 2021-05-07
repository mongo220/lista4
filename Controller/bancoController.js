const { Bancos } = require('../models/');

class BancoController {
    async getAll(req, res) {
        try {
            const banco = await Bancos.findAll();
            return res.status(200).json(banco);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }

    async insert(req, res) {
        console.log(req.body.nome)
        try {
            const banco = Bancos.create(req.body);
            return res.status(200).json(banco);
        } catch (e) {
            return res.status(400).json({ error: e.message })
        }
    }
}

module.exports = new BancoController();