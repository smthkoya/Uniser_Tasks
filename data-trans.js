//! 1
const numbers = [1, 2, 3, 4, 5, 6];
// array-i iki qatı olan array yaradın — c // [2, 4, 6, 8, 10]
const twoNumbers = numbers.map(function (i) {
  return i * 2;
});
console.log(twoNumbers);

//! 2
// const numbers = [1, 2, 3, 4, 5];
// array-in cüt ədədərdən ibarət arrayı yaradın —  // [2, 4]
const cutNumbers = numbers.filter((i) => i % 2 == 0);
console.log(cutNumbers);

//! 3
const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 32 },
  { id: 3, name: "Charlie", age: 25 },
  { id: 4, name: "David", age: 40 },
];
// arrayın-dən yaşı 30-da yuxarı olanların adlarından ibarət array yaradın — console.log(namesOver30); // ['Bob', 'David']
const namesOver30 = users
  .filter((a) => a.age >= 30)
  .map(function (i) {
    return i.name;
  });
console.log(namesOver30);

//! 4
const defaultSettings = { theme: "light", fontSize: 16 };
const userSettings = { fontSize: 18, showSidebar: true };
// mergedSettings  iki obyektin dəyərlərini birəşdirin bir obyekt yaradın
const mergedSettings = { ...defaultSettings, ...userSettings };
console.log(mergedSettings);

//! 5
// const numbers = [1, 2, 3, 4, 5, 6]; arrayınin cüt ədədlərinin iki qatını cəmini tap
// —console.log(result); // 24 (2*2 + 4*2 + 6*2)
let sum = 0;
const result = numbers.filter((i) => i % 2 == 0).map((r)=>  sum+=r*2);
console.log(sum);


//! 6
const person = {
  name: 'Alice',
  address: {
    city: 'New York',
    zip: '10001',
  },
};
// obyektinin
const {name, address:{city}, address:{zip}} = person;
console.log(name); // 'Alice'
console.log(city); // 'New York'
console.log(zip); // '10001'  dəyərlərinin ayrı ayrı dəyişən kimi yaz

