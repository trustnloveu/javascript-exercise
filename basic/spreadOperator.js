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
