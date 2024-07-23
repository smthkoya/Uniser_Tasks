// PART 1

//1
console.error("You have one error"); //error mesaji
console.warn("You have one warning"); //warning mesaji
console.log("Hello world!"); //infomasiya mesaji

//2
let userName = prompt("Enter your name: ");
let userSurname = prompt("Enter your surname: ");
let userAge = prompt("Enter your age: ");
console.log(`My name is ${userName} ${userSurname}, I am ${userAge} years old`);

//3
let number1 = +prompt("Enter number 1: ");
let number2 = +prompt("Enter number 2: ");
console.log(number1 + number2); //cemi
console.log(number1 - number2); //ferqi
console.log(number1 * number2); //hasili

//4
let userCountry = prompt("Enter your country: ");
let userCity = prompt("Enter your city: ");
let userAddress = prompt("Enter your address: ");
console.log(`${userCountry}, ${userCity} ${userAddress} kucesi`);

//5
let numberOne = +prompt("Enter number 1: ");
let numberTwo = +prompt("Enter number 2: ");
numberOne = numberOne * (numberTwo + 10);
numberTwo = 10;
let result = numberOne * numberTwo;
console.log(result);

//PART 2

//1
console.log(10 && 12);
// & gedir en birinci false axtarir ve cixardir console-a, amma burda her bir ifade true-di gore emeliyyat axira kimi gedir ve axirinci true-ni console-a cixardir (12)

//2
console.log("" && 12);
// & en birinci false-i cixarina gore "" console-a verir

//3
console.log(undefined || "Boolean Teach");
// || gedir en birinci true olani console-a verir, undefined ise false-di, if all are false onda axirinci false secir

//4
let numberOne1 = 8 && 12;
let numberTwo2 = 0 && 12;
let numberThree3 = null || 10;
console.log((numberOne1 + numberTwo2) * numberThree3);
// numberOne1 - 12 (axirinci true verir), numberTwo2 - 0 (false verir), numberThree3 - 10 (true verir), (12 + 0) * 10 = 120

//5
let numberOne11 = 12 || "25";
let numberTwo22 = 10 && 12;
console.log(numberOne11 - numberTwo22);
console.log(numberOne11 + numberTwo22);
// numberOne - 12 (true verir),  numberTwo - 12 (en axirinci true verir), 12-12=0 12+12=24
