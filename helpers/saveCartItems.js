const saveCartItems = () => {
  // seu código aqui
  const favorites = document.querySelector('.cart__items');
  localStorage.setItem('favorites', favorites.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
