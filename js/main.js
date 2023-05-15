const headphones = [
  {
    id: "el1",
    img: "./img/byz-s8521.webp",
    title: "Apple BYZ S8521",
    rate: 4.7,
    price: 2927,
  },
  {
    id: "el2",
    img: "./img/EarPods_1.webp",
    title: "Apple EarPods",
    rate: 4.5,
    price: 2327,
  },
  {
    id: "el3",
    img: "./img/EarPods_2.webp",
    title: "Apple EarPods",
    rate: 4.5,
    price: 2327,
  },
  {
    id: "el4",
    img: "./img/byz-s8521.webp",
    title: "Apple BYZ S8521",
    rate: 4.7,
    price: 2927,
  },
  {
    id: "el5",
    img: "./img/EarPods_1.webp",
    title: "Apple EarPods",
    rate: 4.5,
    price: 2327,
  },
  {
    id: "el6",
    img: "./img/EarPods_2.webp",
    title: "Apple EarPods",
    rate: 4.5,
    price: 2327,
  },
];

const wirelessHeadphones = [
  {
    id: "el7",
    img: "./img/Apple_AirPods.webp",
    title: "Apple BYZ S8521",
    rate: 4.7,
    price: 9527,
  },
  {
    id: "el8",
    img: "./img/GERLAX_GH-04.webp",
    title: "Apple EarPods",
    rate: 4.7,
    price: 6527,
  },
  {
    id: "el9",
    img: "./img/BOROFONE_BO4.webp",
    title: "Apple EarPods",
    rate: 4.7,
    price: 7527,
  },
];

// const headphonesDisplay = () => {
//   headphones[index].array.forEach((element) => {});
// };

// //Добавляем счетчик числа товаров в локальное хранилище

// if (!localStorage.getItem("headphones")) {
//   localStorage.setItem("headphones", JSON.stringify([]));
// }

const cards = document.getElementById("cards");
const wirelessHeadphonesCards = document.getElementById(
  "wireless-headphones-cards"
);

class Products {
  render() {
    let card = "";
    let wirelessHeadphonesCard = "";

    headphones.forEach(({ id, img, title, rate, price }) => {
      card += `
      <div class="headphones-card">
            <picture>
              <source srcset="${img}" />
              <source srcset="img/byz-s8521.png" />
              <img
                class="card-picture"
                src="img/byz-s8521.png"
                alt="headphones"
              />
            </picture>
            <div class="card-content">
              <h3 class="card-content-title">${title}</h3>
              <div class="card-content-rating">
                <svg class="star-icon">
                  <use href="img/sprite.svg#star"></use>
                </svg>
                <p class="rating">${rate}</p>
              </div>
              <p class="card-content-price">${price} ₽</p>
              <p class="card-content-price-original">3527 ₽</p>
              <button class="card-content-button" type="button">Купить</button>
            </div>
            <!-- /.card-content -->
          </div>
          `;
    });

    wirelessHeadphones.forEach(({ id, img, title, rate, price }) => {
      wirelessHeadphonesCard += `
      <div class="headphones-card">
            <picture>
              <source srcset="${img}" />
              <source srcset="img/byz-s8521.png" />
              <img
                class="card-picture"
                src="img/byz-s8521.png"
                alt="headphones"
              />
            </picture>
            <div class="card-content">
              <h3 class="card-content-title">${title}</h3>
              <div class="card-content-rating">
                <svg class="star-icon">
                  <use href="img/sprite.svg#star"></use>
                </svg>
                <p class="rating">${rate}</p>
              </div>
              <p class="card-content-price">${price} ₽</p>
              <p class="card-content-price-original">3527 ₽</p>
              <button class="card-content-button" type="button">Купить</button>
            </div>
            <!-- /.card-content -->
          </div>
          `;
    });

    // const cards = `
    //   <div class="headphones-cards">
    //     ${card}
    //   </div>
    // `;

    cards.innerHTML = card;
    wirelessHeadphonesCards.innerHTML = wirelessHeadphonesCard;
  }
}

const product = new Products();
product.render();
