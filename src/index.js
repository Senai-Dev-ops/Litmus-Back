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
//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
db.sequelize.sync().then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});

// const { Maquina } = require('../src/database/models')
// //lógica para gerar dados aleatorios de rotação, avanço e temperatura

// var sin = 1 // sinal se a máquina está ligada(1) ou desligada(0)
// if (sin == 1) {
//     let valor = Math.floor(Math.random() * (100 - 1)) + 1
//     let valor2 = Math.floor(Math.random() * (30 - 1)) + 1

//     while (valor == valor2) {
//         let valor2 = Math.floor(Math.random() * (100 - 1)) + 1
//     }
//     temporiza(valor, valor2)
//     function dnv(valor) {
//         if (sin == 1) {
//             let valor2 = Math.floor(Math.random() * (100 - 1)) + 1

//             while (valor == valor2) {
//                 let valor2 = Math.floor(Math.random() * (100 - 1)) + 1

//             }
//             temporiza(valor, valor2)
//         }
//     }
// }

// function temporiza(valor, valor2) {
//     var cont = 0
//     var cont2 = Math.floor(Math.random() * (14 - 1)) + 1

//     inter = setInterval(function () {
//         cont++;
//         //gravar dado no bd
//         console.log("\nRotação atual: ", Math.floor((80 * valor) + ((Math.random() * (100 - 1)) + 1)))     
//         console.log("\nAvanço: ", Math.floor((0.35 * valor) + ((Math.random() * (0.4375 - 0)) + 0)))
//         console.log("\nTemperatura: ", 30 + (Math.floor((0.5 * valor) + ((Math.random() * (6.25 - 0)) + 0))))
//         let data = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
//         console.log(data)
//         //console.log(data)
//         Maquina.create({
//             rotacao: Math.floor((80 * valor) + ((Math.random() * (100 - 1)) + 1)),
//             avanco: Math.floor((0.35 * valor) + ((Math.random() * (0.4375 - 0)) + 0)),
//             temperatura: 30 + (Math.floor((0.5 * valor) + ((Math.random() * (6.25 - 0)) + 0))),
//             datahora: data.toString(),
//         })

//         if (cont > cont2) {
//             clearInterval(inter);
//             if (valor < valor2) {
//                 var pr = valor
           
//                 var seg = valor2
//                 int = setInterval(function () {
//                     pr++;
//                     //gravar dado no bd
//                     console.log("\nRotação atual: ", Math.floor((80 * pr) + ((Math.random() * (1000 - 1)) + 1)))
//                     console.log("\nAvanço: ", Math.floor((0.35 * pr) + ((Math.random() * (4.375 - 1)) + 1)))
//                     console.log("\nTemperatura: ", 30 + (Math.floor((0.5 * pr) + ((Math.random() * (6.25 - 0)) + 0))))
//                     let data = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
//                     Maquina.create({
//                         rotacao: Math.floor((80 * pr) + ((Math.random() * (1000 - 1)) + 1)),
//                         avanco: Math.floor((0.35 * pr) + ((Math.random() * (4.375 - 1)) + 1)),
//                         temperatura: 30 + (Math.floor((0.5 * pr) + ((Math.random() * (6.25 - 0)) + 0))),
//                         datahora: data.toString(),
//                     })
//                     if (pr >= seg) {
//                         let valor = seg
//                         clearInterval(int);
//                         dnv(valor)
//                     }
//                 }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd
//             }
//             else {
//                 var pr = valor2
      
//                 var seg = valor
//                 int = setInterval(function () {
//                     seg--;
//                     //gravar dado no bd
//                     console.log("\nRotação atual: ", Math.floor((80 * seg) + ((Math.random() * (1000 - 1)) + 1)))
//                     console.log("\nAvanço: ", Math.floor((0.35 * seg) + ((Math.random() * (4.375 - 1)) + 1)))
//                     console.log("\nTemperatura: ", 30 + (Math.floor((0.5 * seg) + ((Math.random() * (6.25 - 0)) + 0))))
//                     let data = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
//                     Maquina.create({
//                         rotacao: Math.floor((80 * seg) + ((Math.random() * (1000 - 1)) + 1)),
//                         avanco: Math.floor((0.35 * seg) + ((Math.random() * (4.375 - 1)) + 1)),
//                         temperatura: 30 + (Math.floor((0.5 * seg) + ((Math.random() * (6.25 - 0)) + 0))),
//                         datahora: data.toString(),
//                     })
//                     if (seg <= pr) {
//                         let valor = pr
//                         clearInterval(int);
//                         dnv(valor)
//                     }
//                 }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd
//             }
//         }
//     }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd

// }



