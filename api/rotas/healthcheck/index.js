const roteador = require("express").Router();
const instancia = require("../../banco-de-dados");

roteador.get("/", async (requisição, resposta, proximo) => {
  try {
    const testQuery = await instancia.query("SELECT 1;");

    resposta.status(200);
    resposta.json({
      service: {
        ok: true,
      },
      database: {
        connected: !!testQuery,
      },
    });
  } catch (err) {
    console.log(err);
    promixo(err);
  }
});

module.exports = roteador;
