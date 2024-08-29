//! Alqoritmlər Partdayış üçün

//! Part 1
// 1) Istifadəçidən ad, soyad və yaş dəyəri alın. Console hissəyə Mənim adım filankesov filankes mənim filan yaşım var yazsın. Filan yerinə istifadəçidən gələn dəyəri yazın.
let userName = prompt("Enter your name: ");
let userSurname = prompt("Enter your surname: ");
let userAge = prompt("Enter your age: ");
console.log(
  `My name is ${userName} ${userSurname} and I am ${userAge} years old.`
);

// 2) İstifadəçidən Ədədlər alın onların cəmini fərqini və hasilini yazın Console hissəyə amma belə çıxarsın  9+10=19 kimi çıxarsın.
let numberOne = +prompt("Enter number one: ");
let numberTwo = +prompt("Enter number two: ");
console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);

// 3) İstifadəçidən Ölkə , Şəhər, Küçə adını yazsın sonda Bunları birləşdirib console-a çıxarsın. Məs : Azərbaycan , Bakı Sübhi Salayev 7 küçəsi yazsın.
let userCity = prompt("Enter your city: ");
let userCountry = prompt("Enter your country: ");
let userAdress = prompt("Enter your adress: ");
console.log(`${userCountry}, ${userCity} ${userAdress}`);

//! Part 2
// 1) İstifadəçidən 3 dənə tərəf alın side1 , side2, side3  bu tərəflərə görə üçbucağın mövcudluğunu yoxlayın. Mövcuddursa Ekrana mövcuddur deyilsə mövcud deyildir yazsın.
// 2) Üçbucağın tərəflərin mövcudluğunu yoxladıqdan sonra üçbucağın tərəfinə görə tipin tapın bərabər tərəfli müxtəlif tərəfli və ya bərabəryanlı olduğunu təyin edin.

let side1 = +prompt("Enter first side: ");
let side2 = +prompt("Enter second side: ");
let side3 = +prompt("Enter third side: ");
let triangle;
let triangleType;
if (
  Math.abs(side1 - side2) <= side3 &&
  side1 + side2 >= side3 &&
  Math.abs(side3 - side2) <= side1 &&
  side3 + side2 >= side1 &&
  Math.abs(side1 - side3) <= side2 &&
  side1 + side3 >= side2
) {
  triangle = "Movcuddur";
  if (side1 == side2 && side1 == side3 && side2 == side3) {
    triangleType = "Bərabər tərəfli";
  } else if (
    (side1 == side2 && side1 != side3) ||
    (side1 == side3 && side1 != side2) ||
    (side2 == side3 && side2 != side1)
  ) {
    triangleType = "Bərabəryanlı";
  } else if (
    Math.pow(side1, 2) + Math.pow(side2, 2) == Math.pow(side3, 2) ||
    Math.pow(side1, 2) + Math.pow(side3, 2) == Math.pow(side2, 2) ||
    Math.pow(side3, 2) + Math.pow(side2, 2) == Math.pow(side1, 2)
  ) {
    triangleType = "Duzbucaqli";
  } else {
    triangleType = "Müxtəlif tərəfli";
  }
  console.log(triangleType);
} else {
  triangle = "Movcud deyil";
}
console.log(triangle);

// 3) Havanın tipinə görə havanın yağışlı günəşli qarlı olduğunu yazın switch case ilə yazın. 'cloudy'  olarsa hava 'It might be cold, you need a jacket.' yazsın məsələn.
let weather = prompt("Enter today's weather: ");
let weatherResult;
switch (weather) {
  case "rainy":
    weatherResult = "It might rain, you need an umbrella.";
    break;
  case "snowy":
    weatherResult = "It might be snowy, you need a scarf.";
    break;
  case "sunny":
    weatherResult = "It is sunny, wear sunglasses.";
    break;
  case "cloudy":
    weatherResult = "It might be cold, you need to wear a jacket.";
    break;
  default:
    weatherResult = "Please enter a real weather type";
    break;
}
console.log(weatherResult);

// 4) İstifadəçidən ədəd alsın ədəd 1-12 arası olsun bu ədədlərdən kiçik və böyük olarsa ekrana ədəd doğru deyil yazsın. Sonra ədədə görə ilin ayını müəyyən etsin. məsələn ədəd 11 olarsa Ekrana bu noyabr ayıdır yazsın. Switch casse ilə yazın .
let month = +prompt("Enter the month name: ");
let monthResult;
if (month > 12 || month < 1) {
  monthResult = "Doğru deyil";
} else {
  switch (month) {
    case 1:
      monthResult = "It is January";
      break;
    case 2:
      monthResult = "It is February";
      break;
    case 3:
      monthResult = "It is March";
      break;
    case 4:
      monthResult = "It is April";
      break;
    case 5:
      monthResult = "It is May";
      break;
    case 6:
      monthResult = "It is June";
      break;
    case 7:
      monthResult = "It is July";
      break;
    case 8:
      monthResult = "It is August";
      break;
    case 9:
      monthResult = "It is September";
      break;
    case 10:
      monthResult = "It is October";
      break;
    case 11:
      monthResult = "It is November";
      break;
    default:
      monthResult = "It is December";
      break;
  }
}
console.log(monthResult);

// 5) İstifadəçidən ədəd alın bu ədədin mənfi və ya müsbət olmasını ekrana yazdırın Ternary operatordan istifadə edərək.
let userNumber = +prompt("Enter any number: ");
let message;
message = userNumber >= 0 ? "Musbetdir" : "Menfidir";
console.log(message);

//! Part 3
// 1) Aşağıdakı arraylar-dən Birdənə FullStack arrayı düzəldin hər bir arrayın içindəki elementi fullStack array-nə push edin  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] const backEnd = ['Node','Express', 'MongoDB']
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullstack = [];
for (let index = 0; index < frontEnd.length; index++) {
  fullstack.push(frontEnd[index]);
}
for (let index = 0; index < backEnd.length; index++) {
  fullstack.push(backEnd[index]);
}
console.log(fullstack);

// 2) const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] min və max age-i tap
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let maxAge = ages[0];
let minAge = ages[0];
for (let index = 0; index < ages.length; index++) {
  if (maxAge < ages[index]) {
    maxAge = ages[index];
  }
}
for (let index = 0; index < ages.length; index++) {
  if (minAge > ages[index]) {
    minAge = ages[index];
  }
}
console.log(maxAge);
console.log(minAge);

// 3) age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın . evenAge = [22,24,20,26,24] olsun sonda
let age = [19, 22, 27, 24, 20, 65, 47, 26, 33, 24, 31];
let evenAge = [];
for (let index = 0; index < age.length; index++) {
  if (age[index] % 2 == 0) {
    evenAge.push(age[index]);
  }
}
console.log(evenAge);

// 4) yuxarıdakı ages arrayın həndəsi ortasını tapın
let multOfAges = 1;
for (let index = 0; index < ages.length; index++) {
  multOfAges *= ages[index];
}
console.log(Math.pow(multOfAges, 1 / ages.length));

// 5) Yuxarıdakı ages arrayın ədədi ortasını tapı
let sumOfAges = 0;
for (let index = 0; index < ages.length; index++) {
  sumOfAges += ages[index];
}
console.log(sumOfAges / ages.length);

//! Part 4
// 1) const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] arrayinin adlarının ekrana yazdırın
for (let index = 0; index < frontEnd.length; index++) {
  console.log(frontEnd[index]);
}

// 2) const backEnd = ['Node','Express', 'MongoDB'] array-in dəyərini ekrana yazdırın forof dövrü ilə
for (const element of backEnd) {
  console.log(element);
}

// 3) 1-100 qədər 3 və 6 bölünən ədədlərin cəmini tapın
let sum = 0;
for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0 && index % 6 == 0) {
    sum += index;
  }
}
console.log(sum);

// 4) 50-70 qədər 3 bölünən ədədlərin hasilin tapın
let mult = 1;
for (let index = 50; index <= 70; index++) {
  if (index % 3 == 0) {
    mult *= index;
  }
}
console.log(mult);

// 5) -10 -dan 30-a qədər cüt ədədlərin sayını tapın
let count = 0;
for (let index = -10; index < 30; index++) {
  if (index % 2 == 0) {
    count++;
  }
}
console.log(count);

//! Part 5
// 1) Array-in elementlərinin cəmini toplayan funksiya yazın
let numbers = [1, 5, 7, 12, 15, 19, 23];
const numberSum = () => {
  let sum = 0;
  numbers.forEach((element) => {
    // sum += element;
  });
  console.log(sum);
};
numberSum();

// 2) Çevrenin sahəsini tapan funksiya yazın
const circleS = (r) => {
  console.log(3.14 * r * r);
};
circleS(2);
//! cevre == daire?

// 3) Verilmiş arrayı tərsinə yazdıran funksiya yazın məs : console.log(reverseArray([1, 2, 3, 4, 5])) //[5, 4, 3, 2, 1]
const reverseArray = (array) => {
  let reversedArr = [];
  array.forEach((element) => {
    reversedArr.unshift(element);
  });
  console.log(reversedArr);
};
let anyArray = [1, 2, 3, 4, 53, 23, 1, 5, 6, 31, 2, 76];
reverseArray(anyArray);

// 4) Verilmiş array içində cüt ədədləri toplayan funksiya yazın.
let cutArrayForTask4 = [];
const cutArray = (arr) => {
  arr.forEach((element) => {
    if (element % 2 == 0) {
      cutArrayForTask4.push(element);
    }
  });
  console.log(cutArrayForTask4);
};
let anyCutArr = [2, 4, 3, 6, 8, 5, 9];
cutArray(anyCutArr);

// 5) verilmiş faiz artımını hesablayan  funksiya yazın məsələnt increase(50,20) 50 - ni  20 faiz artırır yəni geriyə 60 dəyərini versin
const faizArt = (num, per) => {
  console.log((num * per) / 100 + num);
};
faizArt(50, 20);

// 6) faiz Azalmasını hesablayan funksiya yazın yuxarıdakının əksi olsun
const faizAzal = (num, per) => {
  console.log(num - (num * per) / 100);
};
faizAzal(50, 20);
