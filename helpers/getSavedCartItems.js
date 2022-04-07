const getSavedCartItems = (lista) => {
  // seu código aqui
  const favorites = lista;
  const list = localStorage.getItem('cartItems');

  favorites.innerHTML = list;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
