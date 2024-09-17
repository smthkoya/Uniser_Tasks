//! 1
// const numbers = [1, 2, 3, 4, 5]; Arrayın elementlərini yazdırın
// console.log(first);   // Output: 1
// console.log(second);  // Output: 2
// console.log(fourth);  // Output: 4
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(first);
console.log(second);
console.log(fourth);

// //!2
// Objectin elementlərini yazdırın
const personJohn = {
  firstNameJohn: "John",
  lastName: "Doe",
  age: 30,
};
const { firstNameJohn, lastName, age } = personJohn;

console.log(firstNameJohn); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30

//! 3
// printPerson Funksiyasını yazın.
const personAlice = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
};
const printPerson = (data) => {
  const { firstName, lastName, age } = data;
  console.log(`${firstName} ${lastName} is ${age} years old`);
};
printPerson(personAlice); // Output: Alice Johnson is 25 years old.

//! 4
// Ekrana yazdırın məlumatları aşağıdakı kimi
const user = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  details: {
    firstName: "John",
    lastName: "Doe",
    address: {
      city: "New York",
      zipCode: "10001",
    },
  },
};

const {
  username,
  details: { firstName },
  details: {
    address: { city },
  },
} = user;
console.log(username); // Output: john_doe
console.log(firstName); // Output: John
console.log(city); // Output: New York
