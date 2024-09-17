//? String simple tasks

//! let word = "JavaScript";  sözündə 3 nömrəli indeksin hansı hərf olduğunu tapın
let word = "Javascript";
console.log(word.charAt(3));
console.log(word[3]);

//! let sentence = "This is a simple sentence."; “is ” sözünün indeksini tapın
let sentence = "This is a simple sentence.";
console.log(sentence.indexOf("is "));

//! let sentence = "This is a sample sentence.";   sözü boşluqlardan ayıraraq array-ə çevirin .Output: ["This", "is", "a", "sample", "sentence."]
console.log(sentence.split(" "));

//! let phrase = "Programming is fun!";  “Programming” sözünü ayırın cümlədən . // Output: Programming
let phrase = "Programming is fun!";
console.log(phrase.slice(0, 11));

//! let phrase = "Programming is fun!";  “fun” sözünü ayırın cümlədən .  // Output: fun
let indexOfFun = phrase.indexOf("fun");
console.log(phrase.slice(indexOfFun, phrase.length - 1));

//? Algorithmical tasks

//! Verilmiş ifadəni tərsinə çevirən metod yazın
//! let originalString = "Hello, World!";
//! let reversedString = reverseString(originalString);
//! console.log(reversedString); // Output: "!dlroW ,olleH"
let originalString = "Hello, World!";
const reverseString = (string) => {
  let reversedString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    reversedString += string.charAt(index);
  }
  console.log(reversedString);
};
reverseString(originalString);

//! Verilmiş ifadənin ilk hərflərini böyüklə yazan metod yazın tərsinə çevirən metod yazın
//! console.log(capitalizeWords(sentence)); // Output: "Javascript Is Fun"
let sentenceOfJs = "javascript is fun for me";
// const capitalizeSen = (string) => {
//   string = string.charAt(0).toUpperCase() + string.slice(1);
//   let empty = string.indexOf(" ");
//   let empty1 = sentenceOfJs.search(" ");
//   for (let index = 0; index < string.length; index++) {
//     if (string.charAt(index) == " ") {
//       string = string.charAt(index + 1).toUpperCase();
//     }
//   }
//   console.log(string);
// };
// capitalizeSen(sentenceOfJs);

// const capitalizeSen = (string) => {
//   let new_string = string[0].toUpperCase();
//   for (let i = 1; i < string.length; i++) {
//     if (string[i] == " ") {
//       new_string += " " + string[i + 1].toUpperCase();
//       i++;
//     } else {
//       new_string += string[i].toLowerCase();
//     }
//   }
//   console.log(new_string);
// };

//   sentenceOfJs = "javascript is fun for me"
// capitalizeSen(sentenceOfJs);
const capitalizeSen = (string) => {
  let empty = string.charAt(0).toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] == " ") {
      empty += " " + string.charAt(i + 1).toUpperCase();
      i++;
    } else {
      empty += string[i].toLowerCase();
    }
  }
  console.log(empty);
};
capitalizeSen(sentenceOfJs);



const capipapi = (str) => {
  let array = str.split(" ");
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);
  }
  console.log(array.join(" "));
};
capipapi(sentenceOfJs);

// capipapi and capitalizeSen functions are correct. commented are my faily attempts:(

//! Verilmiş cümlədəki qalın saitləri tapan metod yazın
//! console.log(countVowels(text)); // Output: 8
let textJs = "JavaScript is awesome!";
const countVowels = (text) => {
  let vowels = "euioa";
  let counter = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text.charAt(j).includes(vowels.charAt(i).toLowerCase())) {
        counter++;
      }
    }
  }
  console.log(counter);
};
countVowels(textJs);

//! Verilmiş cümlədəki ən uzun sözü tapan metod yazın
//! console.log(findLongestWord(sentence)); // Output: "sentence"
let sentenceLong = "This is a sample sentence with long words.";
const findLongestSen = (sen) => {
  let array = sen.split(" ");
  let longestWord;

  for (let i = 0; i < array.length; i++) {
    if (array[i].endsWith(".")) {
      array[i] = array[i].slice(0, array[i].length - 1); //deleted point
    }
    longestWord = array[i];
    for (let j = 1; j < array.length; j++) {
      if (longestWord.length < array[j].length) {
        longestWord = array[j];
      }
    }
  }
  console.log(longestWord);
};
findLongestSen(sentenceLong);
