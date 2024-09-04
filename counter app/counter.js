const substractBtn = document.querySelector(".substract");
const addBtn = document.querySelector(".add");
const number = document.querySelector(".number");
const resetBtn = document.querySelector(".reset");

let count = 0;
const addFn = () => {
  count++;
  number.innerHTML = count;
};
const subFn = () => {
  count--;
  number.innerHTML = count;
};
const resetFn = () => {
  count = 0;
  number.innerHTML = count;
};

addBtn.addEventListener("click", addFn);
substractBtn.addEventListener("click", subFn);
resetBtn.addEventListener("click", resetFn);
