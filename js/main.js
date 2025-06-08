function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart-count').textContent = cart.length;
}

function renderProducts(container) {
  const root = document.getElementById(container);
  if (!root) return;
  root.innerHTML = PRODUCTS.map(p => `
    <div class="card">
      <a href="product.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
      </a>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert('Added to cart');
}

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById('product-detail');
  if (!container || !product) return;
  container.innerHTML = `
    <div class="card">
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>`;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const container = document.getElementById('cart-items');
  if (!container) return;
  if (cart.length === 0) {
    document.getElementById('empty-cart').style.display = 'block';
    return;
  }
  container.innerHTML = cart.map(id => {
    const p = PRODUCTS.find(pr => pr.id === id);
    if (!p) return '';
    return `<div class="card"><h3>${p.name}</h3><p>$${p.price}</p></div>`;
  }).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderProducts('product-list');
  renderProductDetail();
  renderCart();
});
