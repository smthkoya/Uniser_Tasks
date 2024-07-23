// PART 1

//1
// console.error("You have one error"); //error mesaji
// console.warn("You have one warning"); //warning mesaji
// console.log("Hello world!"); //infomasiya mesaji

//2
// let userName = prompt("Enter your name: ");
// let userSurname = prompt("Enter your surname: ");
// let userAge = prompt("Enter your age: ");
// console.log(`My name is ${userName} ${userSurname}, I am ${userAge} years old`);

//3
// let numberOne = +prompt("Enter number 1: ");
// let numberTwo = +prompt("Enter number 2: ");
// console.log(numberOne + numberTwo); //cemi
// console.log(numberOne - numberTwo); //ferqi
// console.log(numberOne * numberTwo); //hasili

//4
// let userCountry = prompt("Enter your country: ");
// let userCity = prompt("Enter your city: ");
// let userAddress = prompt("Enter your address: ");
// console.log(`${userCountry}, ${userCity} ${userAddress} kucesi`);

//5
// let numberOne = +prompt("Enter number 1: ");
// let numberTwo = +prompt("Enter number 2: ");
// numberOne = numberOne * (numberTwo + 10);
// numberTwo = 10;
// let result = numberOne * numberTwo;
// console.log(result);

//PART 2

//1
//console.log(10 && 12);
// & gedir en birinci false axtarir ve cixardir console-a, amma burda her bir ifade true-di gore emeliyyat axira kimi gedir ve axirinci true-ni console-a cixardir (12)

//2
// console.log( "" && 12);
// & en birinci false-i cixarina gore "" console-a verir

//3
// console.log(undefined || "Boolean Teach");
// || gedir en birinci true olani console-a verir, undefined ise false-di

//4
// let numberOne = 8 && 12;
// let numberTwo = 0 && 12;
// let numberThree = null || 10;
// console.log((numberOne + numberTwo) * numberThree);
// numberOne - 12 (axirinci true verir), numberTwo - 0 (false verir), numberThree - 10 (true verir), (12 + 0) * 10 = 120

//5
// numberOne = 12 || “25” numberTwo = 10 && 12  subs =  numberOne - numberTwo , sum = numberOne + numberTwo  console-a çıxarın və nəticəllərin niyə elə olduğunu izah edin.
// let numberOne = 12 || "25";
// let numberTwo = 10 && 12;
// console.log(numberOne - numberTwo);
// console.log(numberOne + numberTwo);
// numberOne - 12 (true verir),  numberTwo - 12 (en axirinci true verir), 12-12=0 12+12=24
