let button = document.getElementById("submit-button");

// Bootstarpdan gələn kart dəyərinin rəngini dəyişin
const card = document.getElementsByClassName("card");
card[0].classList.remove("text-bg-light");
card[0].classList.add("text-bg-danger");

// Buttona klik etdikdə kartın rəngi dəyişsin
const changeColorOfTheCard = () => {
  card[0].classList.remove("text-bg-danger");
  card[0].classList.add("text-bg-primary");
};
button.addEventListener("click", changeColorOfTheCard);

// Header Sözünün Rəngini dəyişin
const cardHeader = document.getElementsByClassName("card-header");
cardHeader[0].classList.add("text-black");

// Card - ın width dəyərini dəyişin
card[0].style.maxWidth = "25rem";

// Buttona klik etdikdə Light Card title sözünün rəngi dəyişsin
const cardTitle = document.querySelector(".card-title");
// const cardTitle = document.getElementsByClassName("card-title");
const changeColorOfTheTitle = () => {
  cardTitle.classList.add("text-black");
};
button.addEventListener("click", changeColorOfTheTitle);

// Buttona klik etdikdə butttonun rəngi dəyişsin
const changeColorOfTheBtn = () => {
  button.classList.remove("btn-primary");
  button.classList.add("btn-danger");
};
button.addEventListener("click", changeColorOfTheBtn);

// Header sözünü  yanına <span class="badge text-bg-secondary">4</span> əavə edin
cardHeader[0].innerHTML += ' <span class="badge text-bg-secondary">4</span>';

// Light card title sözünü coders sözü ilə dəyişin
cardTitle.innerText = "Coders";

// p tag inin içərisini loremlə dəyişin
const cardText = document.querySelector(".card-text");
cardText.innerText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, totam.";
