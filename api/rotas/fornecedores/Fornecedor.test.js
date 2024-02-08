const Fornecedor = require("./Fornecedor")
const tabelaFornecedor = require('./__mocks__/TabelaFornecedor')

jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor.js')

describe('Fornecedor', () => {
	describe('validar', () => {
		it('Deve validar e retornar true', () => {
			const fornecedor = new Fornecedor({
				empresa: 'Pethome',
				email: 'pethome@email.com',
				categoria: 'alimentos'
			})

			expect(fornecedor.validar()).toBe(true)
		})
	})

	describe('criar', () => {
		it('O método criar() teve execução bem sucedida', async () => {
			const fornecedor = new Fornecedor({
				categoria: "alimentos",
        dataAtualizacao: "10/01/2000",
        dataCriacao: "10/01/2000",
    		email: "pethome@email.com",
    		empresa: "Pethome",
        id: 1,
        versao: 90,
			})

			await fornecedor.criar()
			
			expect(fornecedor.validar()).toEqual(true)
			expect(fornecedor).toEqual(tabelaFornecedor.mocks.fornecedor)
		})
	})
})