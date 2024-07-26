//Condition Tasks
//PROBLEM 1

// let time = +prompt("Enter the time");
// let result;
// if (time > 24 || time < 0) {
//   result = "Enter a real time";
// } else {
//   if (time <= 12) {
//     result = "Sabahın xeyir";
//   } else if (time > 12 && time <= 17) {
//     result = "Günortanız xeyir";
//   } else {
//     result = "Axşamınız xeyir";
//   }
// }
// console.log(result);

//PROBLEM 2
// let numberOne = +prompt("Enter first number: ");
// let numberTwo = +prompt("Enter second number: ");
// let numberThree = +prompt("Enter third number: ");
// let middle = (numberOne + numberTwo + numberThree) / 3;
// let numberResult;
// if (middle < 20) {
//   numberResult = "Aktiv";
// } else {
//   numberResult = "Deaktiv";
// }
// console.log(numberResult);

//1
// let side1 = +prompt("Enter first side: ");
// let side2 = +prompt("Enter second side: ");
// let side3 = +prompt("Enter third side: ");
// let triangle;
// let triangleType;
// if (
//   Math.abs(side1 - side2) <= side3 &&
//   side1 + side2 >= side3 &&
//   Math.abs(side3 - side2) <= side1 &&
//   side3 + side2 >= side1 &&
//   Math.abs(side1 - side3) <= side2 &&
//   side1 + side3 >= side2
// ) {
//   triangle = "Movcuddur";
//   //2
//   if (side1 == side2 && side1 == side3 && side2 == side3) {
//     triangleType = "Bərabər tərəfli";
//   } else if (
//     (side1 == side2 && side1 != side3) ||
//     (side1 == side3 && side1 != side2) ||
//     (side2 == side3 && side2 != side1)
//   ) {
//     triangleType = "Bərabəryanlı";
//   } else if (
//     Math.pow(side1, 2) + Math.pow(side2, 2) == Math.pow(side3, 2) ||
//     Math.pow(side1, 2) + Math.pow(side3, 2) == Math.pow(side2, 2) ||
//     Math.pow(side3, 2) + Math.pow(side2, 2) == Math.pow(side1, 2)
//   ) {
//     triangleType = "Duzbucaqli";
//   } else {
//     triangleType = "Müxtəlif tərəfli";
//   }
//   console.log(triangleType);
// } else {
//   triangle = "Movcud deyil";
// }
// console.log(triangle);

//3
// let weather = prompt("Enter today's weather: ");
// let weatherResult;
// switch (weather) {
//   case "rainy":
//     weatherResult = "It might rain, you need an umbrella.";
//     break;
//   case "snowy":
//     weatherResult = "It might be snowy, you need a scarf.";
//     break;
//   case "sunny":
//     weatherResult = "It is sunny, wear sunglasses.";
//     break;
//   case "cloudy":
//     weatherResult = "It might be cold, you need to wear a jacket.";
//     break;
//   default:
//     weatherResult = "Please enter a real weather type";
//     break;
// }
// console.log(weatherResult);

//4
// let month = +prompt("Enter the month name: ");
// let monthResult;
// if (month > 12 || month < 1) {
//   monthResult = "Doğru deyil";
// } else {
//   switch (month) {
//     case 1:
//       monthResult = "It is January";
//       break;
//     case 2:
//       monthResult = "It is February";
//       break;
//     case 3:
//       monthResult = "It is March";
//       break;
//     case 4:
//       monthResult = "It is April";
//       break;
//     case 5:
//       monthResult = "It is May";
//       break;
//     case 6:
//       monthResult = "It is June";
//       break;
//     case 7:
//       monthResult = "It is July";
//       break;
//     case 8:
//       monthResult = "It is August";
//       break;
//     case 9:
//       monthResult = "It is September";
//       break;
//     case 10:
//       monthResult = "It is October";
//       break;
//     case 11:
//       monthResult = "It is November";
//       break;
//     default:
//       monthResult = "It is December";
//       break;
//   }
// }
// console.log(monthResult);

//5
// let userNumber = +prompt("Enter any number: ");
// let message;
// message = userNumber >= 0 ? "Musbetdir" : "Menfidir";
// console.log(message);

//Shahnaz's task
//task1:istifadechiden iki eded ve emeliyyat isharesi alin.neticeni consola verin.

// let numberFirst = +prompt("Enter first number: ");
// let emeliyet = prompt("Enter what to do: ");
// let numberSecond = +prompt("Enter second number: ");
// switch (emeliyet) {
//   case "+":
//     emeliyet = numberFirst + numberSecond;
//     break;
//   case "-":
//     emeliyet = numberFirst - numberSecond;
//     break;
//   case "/":
//     emeliyet = numberFirst / numberSecond;
//     break;
//   case "*":
//     emeliyet = numberFirst * numberSecond;
//     break;
//   case "%":
//     emeliyet = numberFirst % numberSecond;
//     break;
//   case "**":
//     emeliyet = numberFirst ** numberSecond;
//     break;
//   default:
//     emeliyet = "Bele emeliyet is not found";
//     break;
// }
// console.log(emeliyet);

//3. İstifadəçidən ədəd alıb tam və kəsr hissələrini loga çıxarın.

// let userInputNumber = +prompt("Please enter any number: ");
// let userResult;
// userResult = userInputNumber - parseInt(userInputNumber);
// console.log(parseInt(userInputNumber), userResult.toFixed(1));
