const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const parameters = require('../config/parameters')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos
const SerializadorErro = require('./Serializador').SerializadorErro
const rotasFornecedores = require('./rotas/fornecedores')
const healthcheck = require('./rotas/healthcheck')

app.use(bodyParser.json())

app.use((requisicao, resposta, proximo) => {
  let formatoRequisitado = requisicao.header('Accept')

  if (formatoRequisitado === '*/*') {
    formatoRequisitado = 'application/json'
  }

  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
    resposta.status(406)
    resposta.end()
    return
  }

  resposta.setHeader('Content-Type', formatoRequisitado)
  proximo()
})

app.use('/api/healthcheck', healthcheck)
app.use('/api/fornecedores', rotasFornecedores)

app.use((erro, requisicao, resposta, proximo) => {
  let status = 500

  if (erro instanceof NaoEncontrado) {
    status = 404
  }

  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
    status = 400
  }

  if (erro instanceof ValorNaoSuportado) {
    status = 406
  }

  const serializador = new SerializadorErro(resposta.getHeader('Content-Type'))
  resposta.status(status)
  resposta.send(
    serializador.serializar({
      mensagem: erro.message,
      id: erro.idErro
    })
  )
})

const serverPath = `${parameters.server.SVC_BASE_URL}:${parameters.server.SVC_PORT}/`

app.listen(parameters.server.SVC_PORT, () =>
  console.log(`A API está funcionando no endereço ${serverPath} 💪`)
)
