const numbers = [1, -3, -2, 5, 4];

// some - existance > (return) true || false
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

// filter - in given conditional statement (return) new array [ ... ]
const filtered = numbers.filter((n) => n >= 0);

// map - loop with key(= index) > (return) value
const items = filtered.map((n) => `<li>${n}</li>`);

// join - Adds all the elements of an array separated by the specified separator string
const html = `<ul>${items.join("")}</ul>`;

// declare an object and return it in loop

// const bundle = filtered.map((n) => {
//   const obj = { value: n };
//   return obj;
// });

const bundle = filtered.map((n) => {
  value: n;
});

// chaining
const postiveNumbers = numbers
  .filter((n) => n >= 0)
  .map((n) => {
    value: n;
  })
  .filter(obj >= obj.value > 1) // excluding 0
  .map(obj >= obj.value);

console.log("postiveNumbers" + filtered);
console.log("map: " + items);
console.log('join(""): ' + html);
console.log("objects in array: " + bundle);
console.log("postiveNumbers > objects without 0 > array: " + postiveNumbers);

// exercise
const movies = [
  {
    title: "movie 1",
    year: 2020,
    rating: 4,
  },
  {
    title: "movie 2",
    year: 2020,
    rating: 4.5,
  },
  {
    title: "movie 3",
    year: 2020,
    rating: 4.3,
  },
];

const result = movies
  .filter((m) => m.year === 2020 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => `${m.title}(${m.year}, ${m.rating})`);

console.log(result);
