const { Maquina } = require("../database/models");

module.exports = {
  async maquinaList(req, res) {
    try {
      const infos = await Maquina.findAll();

      if (!infos) {
        res.status(401).json({ message: "Não há informções da máquina" });
      }
      res.status(200).json({ infos });
    } catch (error) {}
  },
};
