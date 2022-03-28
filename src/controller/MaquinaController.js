const { Maquina } = require('../models')

module.exports = {
    async maquinaList(req, res) {
        try {
            const infos = await Maquina.findAll()

            if (!infos) {
                res.status(401).json({ message: "Não há usuario cadastrados" })
            }
            res.status(200).json({ infos })
        } catch (error) {
            
        }
    }
}