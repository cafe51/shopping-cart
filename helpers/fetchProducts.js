const fetchProducts = async (callback) => {
  // seu código aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const result = await fetch(url);
  const data = await result.json();
  // console.log(data.results);
  callback(data.results);
};

// window.onload = () => {
//   // fetchCurrency();
//   fetchProducts();
// }

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
