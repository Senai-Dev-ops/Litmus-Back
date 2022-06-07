const CreateData = require("../utils/data");
const { Maquina } = require("../database/models");

const createDataClass = new CreateData();

module.exports = {
  async maquinaList(req, res) {
    try {
      const infos = await Maquina.findAll({
        order: [["id", "DESC"]],
        limit: 50
      });

      if (!infos) {
        res.status(401).json({ message: "Não há informções da máquina" });
      }
      res.status(200).json({ infos });
    } catch (error) { }
  },

  async statusMaquina(req, res) {
    const status = req.params;

    if (status.status == 1) {
      res.json({ message: "Máquina ligada!" });
      createDataClass.start()
    } else {
      res.json({ message: "Máquina desligada!" });
      createDataClass.stop()
    }

  },

  async lastData(req, res) {
    try {
      const idItem = await Maquina.max('id')

      const fItem = await Maquina.findByPk(idItem)

      if (!fItem) {
        res.status(401).json({ message: "Último dado não encontrado!" });
      }

      res.status(200).json({ fItem });

    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  }
};
