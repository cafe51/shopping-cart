const fetchProducts = async (coisa) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${coisa}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

// async function imprime() {
//    console.log(await fetchProducts());
// }

// imprime();

// window.onload = () => {
//   // fetchCurrency();
//   fetchProducts();
// }

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
