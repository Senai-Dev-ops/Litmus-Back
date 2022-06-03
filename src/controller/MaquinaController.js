const CreateData =  require("../utils/data");
const { Maquina } = require("../database/models");

const createDataClass = new CreateData();

module.exports = {
  async maquinaList(req, res) {
    try {
      const infos = await Maquina.findAll({limit: 100});

      if (!infos) {
        res.status(401).json({ message: "Não há informções da máquina" });
      }
      res.status(200).json({ infos });
    } catch (error) {}
  },

  async statusMaquina(req, res) {
    try {
      const status = req.params;

      if (status.status == 1) {
        res.json({ message: "Máquina ligada!" });
        createDataClass.start()
      } else {
        res.json({ message: "Máquina desligada!" });
        createDataClass.stop()
      }

    } catch (error) {}
  },
};
