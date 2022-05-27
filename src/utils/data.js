const { Maquina } = require("../database/models");
//lógica para gerar dados aleatorios de rotação, avanço e temperatura

module.exports = class CreateData {
  constructor() {
    this.check = true;
  }

  temporiza(valor) {
    //gravar dado no bd
    const rotacao = Math.floor(80 * valor + (Math.random() * (100 - 1) + 1));
    const avanco = Math.floor(
      0.35 * valor + (Math.random() * (0.4375 - 0) + 0)
    );
    const temperatura =
      30 + Math.floor(0.5 * valor + (Math.random() * (6.25 - 0) + 0));

    console.log("\nRotação atual: ", rotacao);
    console.log("\nAvanço: ", avanco);
    console.log("\nTemperatura: ", temperatura);
    let data = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });
    console.log(data);

    Maquina.create({
      rotacao: rotacao,
      avanco: avanco,
      temperatura: temperatura,
      datahora: data.toString(),
    });
  }

  gerar() {
    if(this.check == false) return;

    let valor = Math.floor(Math.random() * (100 - 1)) + 1;
    this.temporiza(valor);
  }

  start() {
    this.check = true
    while (true) {
      inter = setInterval(() => {
        this.gerar();
      }, 2000);
    }
  }

  stop() {
    this.check = false;
  }
};
