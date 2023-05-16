class Shopping {
  render() {
    const productsStore = localStorageUtil.getProducts();
    let card = "";
    let sumProduct = 0;
    let total = "";

    headphones.forEach(({ id, img, title, rate, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        card += `
        <div class="section-shopping-cart-card">
              <div class="section-shopping-cart-card-image-wrapper">
                <picture>
                  <source srcset="${img}" />
                  <source srcset="img/byz-s8521.png" />
                  <img
                    class="card-picture shopping-cart-card-picture"
                    src="img/byz-s8521.png"
                    alt="headphones"
                  />
                </picture>
                <div class="switch">
                  <button class="button-decrease">
                    <svg class="decrease-icon">
                      <use href="img/sprite.svg#decrease"></use>
                    </svg>
                  </button>
                  <div class="switch-counter">1</div>
                  <button class="button-increase">
                    <svg class="increase-icon">
                      <use href="img/sprite.svg#increase"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <!-- /.section-shopping-cart-card-image-wrapper -->

              <ul class="section-shopping-cart-card-title-and-price">
                <li class="title-and-price-item">${title}</li>
                <li class="title-and-price-item title-and-price-item-last">
                  ${price} ₽
                </li>
              </ul>

              <ul class="section-shopping-cart-card-delete-and-price">
                <li class="delete-and-price-item">
                  <svg class="delete-icon">
                    <use href="img/sprite.svg#delete"></use>
                  </svg>
                </li>
                <li class="delete-and-price-item delete-and-price-item-last">
                  ${price} ₽
                </li>
              </ul>
            </div>  
        `;

        sumProduct += price;

        total = `
            <ul class="total-list">
              <li class="total-list-item">ИТОГО</li>
              <li class="total-list-item">${sumProduct}</li>
            </ul>
            <button class="total-button" type="button">
              <span class="total-button-text">Перейти к оформлению</span>
            </button>
        `;
      }
    });

    shoppingCartCards.innerHTML = card;
    totalPrice.innerHTML = total;
  }
}

const shopping = new Shopping();
shopping.render();
