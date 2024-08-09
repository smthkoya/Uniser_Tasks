//ARRAY TASKS

//! 1) const numbers = [1, 2, 3, 4, 5]; dəyərlərini ekrana yazdırın
let numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//! 2) const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] arrayinin adlarının ekrana yazdırın
const frontEnd1 = ["HTML", "CSS", "JS", "React", "Redux"];
for (let index = 0; index < frontEnd1.length; index++) {
  console.log(frontEnd1[index]);
}

//! 3) const fruits = ['apple', 'banana', 'cherry', 'date']; “banana', 'cherry' dəyərlərini bu array-dəən siin
const fruits11 = ["apple", "banana", "cherry", "date"];
fruits11.splice(1, 2);
console.log(fruits11);

//! 4) const fruits = ['apple', 'banana', 'cherry']; istiədəcidən  meyvə adı alın və arrayın sonuna əlavə edin
const fruits22 = ["apple", "banana", "cherry"];
let userFruit = prompt("Enter a fruit name: ");
fruits22.push(userFruit);
console.log(fruits22);

//! 5) const fruits = ['apple', 'banana', 'cherry']; cherry-nin index-ni tapın
const fruits3 = ["apple", "banana", "cherry"];
console.log(fruits3.indexOf("cherry"));

//! 6) const fruits1 = ['apple', 'banana']; const fruits2 = ['cherry', 'date']; bu iki array birləşdirin
const fruits1 = ["apple", "banana"];
const fruits2 = ["cherry", "date"];
console.log(fruits1.concat(fruits2));

//! 7) const fruits = ['apple', 'banana', 'cherry']; sonuncu elmentini siin
const fruits4 = ["apple", "banana", "cherry"];
fruits4.pop();
console.log(fruits4);

//! 8) const fruits = ['apple', 'banana', 'cherry']; vergüllə ayırarar stringə çevirin – 'apple, banana, cherry'
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.join(", "));

//! 9) Aşağıdakı arraylar-dən Birdənə FullStack arrayı düzəldin hər bir arrayın içindəki elementi fullStack array-nə push edin  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] const backEnd = ['Node','Express', 'MongoDB']
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

//! 10) age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın . evenAge = [22,24,20,26,24] olsun sonda
let age = [19, 22, 27, 24, 20, 65, 47, 26, 33, 24, 31];
let evenAge = [];
for (let index = 0; index < age.length; index++) {
  if (age[index] % 2 == 0) {
    evenAge.push(age[index]);
  }
}
console.log(evenAge);
