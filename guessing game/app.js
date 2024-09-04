const startNewGame = document.querySelector(".startgame");
const enterNum = document.querySelector(".numberinput");
const guessBtn = document.querySelector(".guess");
const progress = document.querySelector(".progress");
const recordedText = document.querySelector(".guesses");

let randomNumber = Math.floor(Math.random() * 100) + 1;
// let randomNumber = 10;

const clearAll = () => {
  progress.value = 0;
  recordedText.innerHTML = "Not Started!";
  enterNum.value = "";
  guessBtn.removeAttribute("disabled", "disabled");
  enterNum.removeAttribute("disabled", "disabled");
};

const increaseProgress = () => {
  progress.value += 10;
  if (+progress.value == 100) {
    guessBtn.setAttribute("disabled", "disabled");
    enterNum.setAttribute("disabled", "disabled");
    recordedText.innerHTML = "You lose the game:(((";
  }
};

const guessFn = () => {
  let userInput = +enterNum.value;
  if (userInput < randomNumber) {
    recordedText.innerHTML = "Number is too low:(";
    increaseProgress();
  } else if (userInput > randomNumber) {
    recordedText.innerHTML = "Number is too high:(";
    increaseProgress();
  } else {
    clearAll();
    recordedText.innerHTML = "You guessed right!;)";
    progress.value = 100;
  }
};

guessBtn.addEventListener("click", guessFn);
startNewGame.addEventListener("click", clearAll);
