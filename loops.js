//Task 1
//? While 1 - dən 5-ə qədər ədədləri göstər (While)
let index = 1;
while (index <= 5) {
  console.log(index);
  index++;
}

//Task 2
//? Istifadəçidən mənfi ədəd alana qədər ədəd al və həmin ədədlərin cəmini tap(While)
let number = +prompt("Enter a number: ");
let sum = 0;
while (number >= 0) {
  sum += number;
  number -= 1;
}
console.log(sum);

//Task 3
//? İstifadçidən ədəd al . ədəd 1-lə 10 arasında olarsa dövr dayansın (Do While)
do {
  let number = +prompt("Enter a number: ");
} while (number < 1 && number > 10);
//! is it true?...

//Task 4
//? 1-dən 100 - ə qədər 5 artımlar ədədləri sırala
for (let index = 1; index <= 100; index++) {
  if (index % 5 == 0) {
    console.log(index);
  }
}

//Task 5
//? 10! faktorialı hesabla
let num = 10;
let factorial = 1;
while (num > 0) {
  factorial *= num;
  num -= 1;
}
console.log(factorial);

//Task 6
//? 1-100 qədər 3 və 6 bölünən ədədlərin cəmini tapın
let sum2 = 0;
for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 6 == 0) {
    sum2 += index;
  }
}
console.log(sum2);

//Task 7
//? 50-70 qədər 3 bölünən ədədlərin hasilin tapın
let mult = 1;
for (let index = 50; index <= 70; index++) {
  if (index % 3 == 0) {
    mult *= index;
  }
}
console.log(mult);

//Task 8
//? -10 -dan 30-a qədər cüt ədədlərin sayını tapın
let counter = 0;
for (let index = -10; index <= 30; index++) {
  if (index % 2 == 0 && index != 0) {
    counter++;
  }
}
console.log(counter);
