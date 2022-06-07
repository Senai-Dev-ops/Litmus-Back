const CreateData = require("../utils/data");
const { Maquina } = require("../database/models");

const createDataClass = new CreateData();

module.exports = {
  async maquinaList(req, res) {
    try {
      const infos = await Maquina.findAll({
        order: [["id", "DESC"]],
        limit: 25
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
  },

  async pdfData(req, res) {
    try {
      let rotationList = []
      let velocityList = []
      let temperatureList = []

      const infos = await Maquina.findAll({
        order: [["id", "DESC"]],
        limit: 25
      });

      if (!infos) {
        res.status(401).json({ message: "Não há informções da máquina" });
      }

      for(const item in infos) {
        rotationList.push(infos[item].rotacao)
        velocityList.push(infos[item].avanco)
        temperatureList.push(infos[item].temperatura)
      }

      var sumRotation = rotationList.reduce((sum, i) => sum + i);
			var sumVelocity = velocityList.reduce((sum, i) => sum + i);
			var sumTemperature = temperatureList.reduce((sum, i) => sum + i);

			let averageRotation = (Math.round(sumRotation / rotationList.length));
			let averageVelocity = (Math.round(sumVelocity / rotationList.length));
			let averageTemperature = (Math.round(sumTemperature / rotationList.length));

      res.json({rotation: averageRotation, velocity: averageVelocity, temperature: averageTemperature})
      
    } catch (error) {
      res.status(400).json({ error: error })
    }
  }
};
