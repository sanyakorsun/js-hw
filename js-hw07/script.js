const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 200 }
];

let cart = [];

const productsListEl = document.getElementById('products-list');
const cartListEl = document.getElementById('cart-list');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const searchInput = document.getElementById('search-input');
const emptyCartMsg = document.getElementById('empty-cart-msg');
const noProductsMsg = document.getElementById('no-products-msg');
const clearCartBtn = document.getElementById('clear-cart-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

function renderProducts(items) {
  productsListEl.textContent = '';

  if (items.length === 0) {
    noProductsMsg.hidden = false;
    return;
  }
  noProductsMsg.hidden = true;

  items.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const info = document.createElement('span');
    info.textContent = `${product.name} — $${product.price}`;

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add to cart';
    addBtn.dataset.productId = product.id;

    card.appendChild(info);
    card.appendChild(addBtn);
    productsListEl.appendChild(card);
  });
}

function renderCart() {
  cartListEl.textContent = '';

  if (cart.length === 0) {
    emptyCartMsg.hidden = false;
  } else {
    emptyCartMsg.hidden = true;
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('cart-item');

    const text = document.createElement('span');
    text.textContent = `${item.name} — $${item.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Видалити';
    removeBtn.classList.add('btn-danger');
    removeBtn.dataset.cartIndex = index;

    li.appendChild(text);
    li.appendChild(removeBtn);
    cartListEl.appendChild(li);
  });

  cartCountEl.textContent = cart.length;

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalEl.textContent = total;
}

productsListEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const productId = Number(e.target.dataset.productId);
    const selectedProduct = products.find((p) => p.id === productId);

    if (selectedProduct) {
      cart.push(selectedProduct);
      renderCart();
    }
  }
});

cartListEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const indexToRemove = Number(e.target.dataset.cartIndex);
    cart.splice(indexToRemove, 1);
    renderCart();
  }
});

clearCartBtn.addEventListener('click', () => {
  cart = [];
  renderCart();
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = products.filter((p) => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
});

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

renderProducts(products);
renderCart();
