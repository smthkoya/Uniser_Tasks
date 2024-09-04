const changeColorBtn = document.querySelector(".changecolor");

const changeColorFn = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let index = 0; index < 6; index++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = changeColorFn();
});
