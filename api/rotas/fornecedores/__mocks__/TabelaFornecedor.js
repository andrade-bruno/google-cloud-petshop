const mocks = {
	fornecedor: {
		categoria: "alimentos",
		dataAtualizacao: "10/01/2000",
		dataCriacao: "10/01/2000",
		email: "pethome@email.com",
		empresa: "Pethome",
		id: 1,
		versao: 90,
	}
}

module.exports = {
  listar () {
    return [mocks.fornecedor]
  },
  inserir (fornecedor) {
    return mocks.fornecedor
  },
  async pegarPorId (id) {
    return mocks.fornecedor
  },
  async atualizar (id, dadosParaAtualizar) {},
  async remover (id) {},
	mocks
}
