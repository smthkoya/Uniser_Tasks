const number = document.querySelectorAll(".number");
const inputDisplay = document.querySelector(".placeholder");
const remove = document.querySelector(".remove");
const removeAll = document.querySelector(".removeAll");
const equal = document.getElementById("equal");
const changeMode = document.querySelector(".fa-regular");

let inputArray = [];
let inputStr = "";
for (let index = 0; index < number.length; index++) {
  number[index].addEventListener("click", function () {
    inputDisplay.value += number[index].value;
    inputArray.push(number[index].value);
  });
}

for (let index = 0; index < number.length; index++) {
  number[index].addEventListener("click", function () {
    inputDisplay.value += number[index].value;
    inputStr += number[index].value;
  });
}

const deleteNumber = function () {
  inputDisplay.value = inputStr.slice(0, -1);
  inputStr = "";
};

const deleteAll = function () {
  inputDisplay.value = "";
  inputStr = "";
};

remove.addEventListener("click", deleteNumber);
removeAll.addEventListener("click", deleteAll);