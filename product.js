// public/product.js
let cart = [];

function loadProducts() {
  fetch('/api/products')
    .then(res => res.json())
    .then(products => {
      const productDiv = document.getElementById('products');
      productDiv.innerHTML = '';
      products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
        `;
        productDiv.appendChild(div);
      });
    });
}

function addToCart(product) {
  cart.push(product);
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function checkout() {
  fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cart })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      cart = [];
      displayCart();
    });
}

loadProducts();
