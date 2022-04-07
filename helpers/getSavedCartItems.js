const getSavedCartItems = () => {
  // seu código aqui
  // const favorites = document.querySelector('.cart__items');
 return localStorage.getItem('cartItems');

  // favorites.innerHTML = list;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
