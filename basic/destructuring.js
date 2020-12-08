// destructuring: Easily extract array elements or object properties
//              and store them in variables

// array destrcuturing
const numbers = [1, 2, 3, 4, 5];
[num1, , num2, ...rest] = numbers;

console.log(num1, num2);
console.log(...rest);

// object destructuring
const person = {
  name: "Austin",
  age: 28,
  languages: ["Korean", "English", "Japanese"],
};

const { name, languages } = person;

console.log(name);
console.log(languages);
console.log(...languages);
