const getSavedCartItems = () => {
  // seu código aqui
  const favorites = document.querySelector('.cart__items');
  const list = localStorage.getItem('favorites');

  favorites.innerHTML = list;
  
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
