const saveCartItems = (lista) => {
  // seu código aqui
  // const favorites = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', lista);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
