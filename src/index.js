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

/*
const { Maquina } = require('../src/models')

//dado mocado
var data = [
    {
        "Data / Hora Medição": "8/8/22 10:00:00",
        "Valor Rotação": 108,
        "Avanço": 0.0099,
        "Temperatura": 19.58
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:01",
        "Valor Rotação": 119,
        "Avanço": 0.0093,
        "Temperatura": 21.5
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:02",
        "Valor Rotação": 119,
        "Avanço": 0.0099,
        "Temperatura": 23.02
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:03",
        "Valor Rotação": 117,
        "Avanço": 0.011,
        "Temperatura": 22.02
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:04",
        "Valor Rotação": 112,
        "Avanço": 0.0111,
        "Temperatura": 22.14
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:05",
        "Valor Rotação": 107,
        "Avanço": 0.0103,
        "Temperatura": 21.79
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:06",
        "Valor Rotação": 101,
        "Avanço": 0.0108,
        "Temperatura": 21.36
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:07",
        "Valor Rotação": 105,
        "Avanço": 0.0114,
        "Temperatura": 22.6
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:08",
        "Valor Rotação": 107,
        "Avanço": 0.0126,
        "Temperatura": 23.52
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:09",
        "Valor Rotação": 103,
        "Avanço": 0.0121,
        "Temperatura": 24.42
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:10",
        "Valor Rotação": 104,
        "Avanço": 0.0128,
        "Temperatura": 23.57
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:11",
        "Valor Rotação": 111,
        "Avanço": 0.0127,
        "Temperatura": 22.44
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:12",
        "Valor Rotação": 110,
        "Avanço": 0.0126,
        "Temperatura": 22.27
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:13",
        "Valor Rotação": 119,
        "Avanço": 0.0124,
        "Temperatura": 22.81
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:14",
        "Valor Rotação": 119,
        "Avanço": 0.0122,
        "Temperatura": 21.26
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:15",
        "Valor Rotação": 124,
        "Avanço": 0.0125,
        "Temperatura": 20.98
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:16",
        "Valor Rotação": 116,
        "Avanço": 0.0124,
        "Temperatura": 21.12
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:17",
        "Valor Rotação": 104,
        "Avanço": 0.0129,
        "Temperatura": 20.75
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:18",
        "Valor Rotação": 111,
        "Avanço": 0.0134,
        "Temperatura": 19.77
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:19",
        "Valor Rotação": 116,
        "Avanço": 0.0132,
        "Temperatura": 19.84
    },
    {
        "Data / Hora Medição": "8/8/22 10:00:20",
        "Valor Rotação": 114,
        "Avanço": 0.0126,
        "Temperatura": 20.28
    }]

//transformando objeto em string
var plv = JSON.stringify(data)

//deletando "[" e "]" 
var rmv = plv.replace(/(\[)/g, "")
var rmv2 = rmv.replace(/\]/g, "")

//fazendo uma lista de string tendo como parametro "},"
var lst = rmv2.split("},")
let lst2 = []


//passando por todos elementos da lista
for (let i = 0; i < (lst.length); i++) {

    //transformando cada elemento da lista em um conjunto de string
    var a = (lst[i]).toString()

    //logica para que no ultimo elemento não adione "}" porque já tem
    if (i == ((lst.length) - 1)) {

        //transformando o conjunto para json novamente
        var d = JSON.parse(a);

        //neste momento será feito a adição no banco de dados
        console.log(d["Data / Hora Medição"])
        console.log(d["Valor Rotação"])
        console.log(d.Avanço)
        console.log(d.Temperatura)
        console.log("\n")

        Maquina.create({
            datahora: d["Data / Hora Medição"],
            rotacao: d["Valor Rotação"],
            avanco: d.Avanço,
            temperatura: d.Temperatura, 
        })
    }
    else {

        //adicionando "}" na última posição para ficar no formato json
        var b = a + "}"


        //transformando o conjunto para json novamente
        var d = JSON.parse(b)

        //neste momento será feito a adição no banco de dados
        /*
        console.log(d["Data / Hora Medição"])
        console.log(d["Valor Rotação"])
        console.log(d.Avanço)
        console.log(d.Temperatura)
        console.log("\n")
        */
/*
        Maquina.create({
            datahora: d["Data / Hora Medição"],
            rotacao: d["Valor Rotação"],
            avanco: d.Avanço,
            temperatura: d.Temperatura,
        })
    }
}
*/
//lógica para gerar dados aleatorios de rotação, avanço e temperatura
const { dadosMaquina } = require("../src/database/models/maquina");
async inserrr(req, res) {

}
module.exports = {
    async insertData(req, res) {
        
        var sin = 1 // sinal se a máquina está ligada(1) ou desligada(0)
        if (sin == 1) {
            let valor = Math.floor(Math.random() * (100 - 1)) + 1
            let valor2 = Math.floor(Math.random() * (30 - 1)) + 1

            while (valor == valor2) {
                let valor2 = Math.floor(Math.random() * (100 - 1)) + 1
            }
            temporiza(valor, valor2)
            function dnv(valor) {
                if (sin == 1) {
                    let valor2 = Math.floor(Math.random() * (100 - 1)) + 1

                    while (valor == valor2) {
                        let valor2 = Math.floor(Math.random() * (100 - 1)) + 1

                    }
                    temporiza(valor, valor2)
                }
            }
        }

        function temporiza(valor, valor2) {
            var cont = 0
            var cont2 = Math.floor(Math.random() * (14 - 1)) + 1

            inter = setInterval(function () {
                cont++;
                //gravar dado no bd
                const { rotacao, avanco, temperatura } = req.body;
                rotacao = Math.floor((80 * valor) + ((Math.random() * (100 - 1)) + 1))
                console.log(rotacao)
                avanco = Math.floor((0.35 * valor) + ((Math.random() * (0.4375 - 0)) + 0))
                temperatura = 30 + (Math.floor((0.5 * valor) + ((Math.random() * (6.25 - 0)) + 0)))
                dadosMaquina.create({
                    rotacao: rotacao,
                    avanco: avanco,
                    temperatura: temperatura,
                })
                if (cont > cont2) {
                    clearInterval(inter);
                    if (valor < valor2) {
                        var pr = valor

                        var seg = valor2
                        int = setInterval(function () {
                            pr++;
                            //gravar dado no bd
                            const { rotacao, avanco, temperatura } = req.body;
                            rotacao = Math.floor((80 * pr) + ((Math.random() * (100 - 1)) + 1))
                            avanco = Math.floor((0.35 * pr) + ((Math.random() * (0.4375 - 0)) + 0))
                            temperatura = 30 + (Math.floor((0.5 * pr) + ((Math.random() * (6.25 - 0)) + 0)))
                            dadosMaquina.create({
                                rotacao: rotacao,
                                avanco: avanco,
                                temperatura: temperatura,
                            })
                            if (pr >= seg) {
                                let valor = seg
                                clearInterval(int);
                                dnv(valor)
                            }
                        }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd
                    }
                    else {
                        var pr = valor2

                        var seg = valor
                        int = setInterval(function () {
                            seg--;
                            //gravar dado no bd
                            const { rotacao, avanco, temperatura } = req.body;
                            rotacao = Math.floor((80 * seg) + ((Math.random() * (100 - 1)) + 1))
                            avanco = Math.floor((0.35 * seg) + ((Math.random() * (0.4375 - 0)) + 0))
                            temperatura = 30 + (Math.floor((0.5 * seg) + ((Math.random() * (6.25 - 0)) + 0)))
                            dadosMaquina.create({
                                rotacao: rotacao,
                                avanco: avanco,
                                temperatura: temperatura,
                            })
                            if (seg <= pr) {
                                let valor = pr
                                clearInterval(int);
                                dnv(valor)
                            }
                        }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd
                    }
                }
            }, 1500);//determinar em milisegundos o intervalo entre cada envio para o bd

        }
    }
}


