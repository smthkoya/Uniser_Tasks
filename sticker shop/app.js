const data = [
  {
    img: "https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-fc750eaa.jpg?v=1616988549",
    title: "Unicorn",
    description: "They exist!",
    price: "9.99",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-6aeffeca.jpg?v=1617396810",
    title: "The Fashionista",
    description: "They exist!",
    price: "9.99",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/2800/2014/products/mockup-de719380.jpg?v=1617396832",
    title: "The Drooler",
    description: "They exist!",
    price: "9.99",
  },
];

const cards = document.querySelector(".cards");

const getCards = () => {
  for (let index = 0; index < data.length; index++) {
    cards.innerHTML += `<div class="card">
    <img src="${data[index].img}" alt="">
    <h1>${data[index].title}</h1>
    <p>${data[index].description}</p>
    <span>${data[index].price}</span>
</div>`;
  }
};
getCards();
