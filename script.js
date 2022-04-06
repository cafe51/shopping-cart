listaCarrinho = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function criaTudo(elemento) {
  const secao = document.querySelector('.items');
  return elemento.forEach((element) => {
    secao.appendChild(createProductItemElement(element));
  });
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

async function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.parentNode.removeChild(event.target);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function productItemClickListener(event) {
  // coloque seu código aqui
  // console.log(getSkuFromProductItem(event.target.parentNode));
  const id = getSkuFromProductItem(event.target.parentNode);
  const item = await fetchItem(id);
  listaCarrinho.appendChild(createCartItemElement(item));
  // console.log(createCartItemElement(item));
}

function createFetchItem() {
  const botoes = document.querySelectorAll('.item__add');
return botoes.forEach((element) => {
  element.addEventListener('click', productItemClickListener);
});
}

window.onload = async () => {
  const data = await fetchProducts('computador');
  criaTudo(data.results);

  createFetchItem();
};

// module.exports = {
//     createProductImageElement,
//     createCustomElement,
//     createProductItemElement,
//     criaTudo,
// };
