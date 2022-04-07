listaCarrinho = document.querySelector('.cart__items');

const valorTotal = document.createElement('div');
const sectionCart = document.querySelector('.cart');
sectionCart.appendChild(valorTotal);
valorTotal.innerText = `${0}`;

function somaDosPreços() {
  let arra = [];
  const lista = listaCarrinho.childNodes;
  lista.forEach((node) => arra.push(node.innerText));
  arra = arra.map((e) => e.split('$')[1]);
  arra = arra.map((e) => parseFloat(e, 10));
  const total = arra.reduce((acc, result) => acc + result);
  valorTotal.className = 'total-price';
  valorTotal.innerText = `${total}`;
}

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
  somaDosPreços();
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
  somaDosPreços();
  saveCartItems();
  // console.log(createCartItemElement(item));
}

function productListEventListener() {
  const botoes = document.querySelectorAll('.item__add');
return botoes.forEach((element) => {
  element.addEventListener('click', productItemClickListener);
});
}

function removeList() {
  listaCarrinho.childNodes.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
}
window.onload = async () => {
  const data = await fetchProducts('computador');
  criaTudo(data.results);

  productListEventListener();

  getSavedCartItems();

  removeList();

  somaDosPreços();
};