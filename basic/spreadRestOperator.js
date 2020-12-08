// ...

// spread operator: it's used to split up array elements or object properties
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];

const oldObject = {
  first: 1,
  second: 2,
  third: 3,
};
const newObject = {
  ...oldObject,
  forth: 4,
  fith: 5,
};

console.log(newArray);
console.log(newObject);

// rest operator: it's used to merge a list of function arguments into an array
sortArgs = (...args) => {
  if (args.length === 1 && Array.isArray(args)) args = [...args[0]];
  else args = [...args];

  return args.sort((a, b) => b - a);
};

console.log(sortArgs(newArray));
console.log(sortArgs(...newArray));

// Exercise
// 인자가 숫자 배열일 때, 배열 내 숫자의 합
// 인자가 복수의 숫자일 때, 모든 인자의 합
// 함수를 구현하시오.

// My solution
// function sum(args) {
//   const flag = Array.isArray(args);
//   if (!flag) {
//     console.log("passed arguments are not an array of numbers.");
//     return;
//   } else {
//     const numbers = [...args];
//     console.log(numbers.reduce((total, number) => total + number));
//     return;
//   }
// }

// Correct Solution
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  console.log(items.reduce((a, b) => a + b));
  return;
}

sum([1, 2, 3, 4]);
sum(1, 2, 3, 4);
