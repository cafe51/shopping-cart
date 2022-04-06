const fetchItem = async (id) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

// async function imprime() {
//    console.log(await fetchItem('MLB1341706310'));
// }

// imprime();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
