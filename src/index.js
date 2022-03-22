require("dotenv").config();

const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const db = require("./database/index.js");
const res = require("express/lib/response");



app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello World")
})


const port = process.env.PORT;
db.sequelize.sync().then(() => {
  console.log("Conectado ao banco de dados");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
