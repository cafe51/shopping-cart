const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Verifica se ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    const argumento = '<ol><li>Item</li></ol>';
    saveCartItems(argumento);
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  test('verifica se ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    const argumento = '<ol><li>Item</li></ol>'
    saveCartItems(argumento);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', argumento);
  })

});
