require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  test('Verifica se fetch é chamada ao executar a funcao fetchItem("MLB1615760527") ', () => {

    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  test('Verifica se ao chamar fetchItem("MLB1615760527") a função fetch retorna o endpoint esperado', () => {
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527'
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(expected);
  })
  test('Verifica se o retorno da funcao fetchItem("MLB1615760527") é uma estrutura de dados igual ao objeto esperado', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  })
  test('Verifica se o retorno da chamamada de fetchItem() é o erro esperado', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
  
});
