require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  test('Verifica se fetch é chamada ao executar a funcao fetchProducts("computador") ', (done) => {
    const fetchProducts = (coisa) => {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${coisa}`);
      expect(fetch).toHaveBeenCalled();
      done();
    }
    fetchProducts('computador');
  })
  test('Verifica se ao chamar fetchProducts("computador") a função fetch retorna o endpoint esperado', (done) => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    const fetchProducts = (coisa) => {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${coisa}`);
      expect(fetch).toHaveBeenCalledWith(expected);
      done();
    }
    fetchProducts('computador');
  })
  test('Verifica se o retorno da funcao fetchProducts("computador") é uma estrutura de dados igual ao objeto esperado', () => {
    expect(fetchProducts('computador')).resolves.toEqual(computadorSearch)
  })
  test('Verifica se o retorno da chamamada de fetchProducts() é o erro esperado', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
  
});
