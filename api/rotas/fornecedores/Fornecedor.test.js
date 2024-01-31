const Fornecedor = require("./Fornecedor")

describe('Fornecedor', () => {
	describe('validar', () => {
		it('Deve validar e retornar true', () => {
			const fornecedor = new Fornecedor({
				empresa: 'Pethome',
				email: 'pethome@email.com',
				categoria: 'alimentos'
			})
			console.log({fornecedor})

			expect(fornecedor.validar()).toBe(true)
		})
	})
})