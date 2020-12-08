// primitive type
//  -   value will be copied when you define new primitive type variable
//  -   each variable use different memory, not sharing and pointing the same one
const number = 1;
const added = number + 1;

console.log(number);
console.log(added);

// refernece type ( = object )
//  -   this type is pointing to the same memory address
//  -   it's sharing same memory
const movies = {
  name: "movie name",
  published: "2020-12-8",
};

// const copiedMovie = movies;
// movies.name = "changed name";

// (solution 1) >   to change a value inside
const copiedMovie = {
  ...movies,
  //   name: "changed name",
};

// (solution 2)  >   to define a new value outside
copiedMovie.name = "changed name";

console.log(movies);
console.log(copiedMovie);
