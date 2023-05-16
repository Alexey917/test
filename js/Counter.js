class Counter {
  renderCounter(count) {
    const html = `
    <a href="shopping-cart.html" class="nav-list-item-link">
      <svg class="shopping-cart-icon">
          <use href="img/sprite.svg#shopping-cart"></use>
      </svg>
    </a>
    <div class="counter">
      <span class="text-counter">${count}</span>
    </div>
    `;

    counterProducts.innerHTML = html;
  }
}

const counter = new Counter();

const productStore = localStorageUtil.getProducts();
counter.renderCounter(productStore.length);
