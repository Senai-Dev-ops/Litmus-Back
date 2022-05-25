require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./database/models");
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 4000;
db.sequelize.sync().then(() => {
  console.log("Conectado ao banco de dados");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

// Function for machine data storage
require("./utils/data");
