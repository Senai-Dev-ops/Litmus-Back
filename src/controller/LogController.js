const { Logs } = require("../database/models");

module.exports = {
  async getAllLogs(req, res) {
    const logs = await Logs.findAll();

    res.status(200).json(logs);
    try {
    } catch (error) {
      res.status(400).json({ error: `${error}` });
    }
  },
};
