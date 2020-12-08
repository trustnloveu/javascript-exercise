let person = { name: "Austin" };

Object.defineProperty(person, "name", {
  writable: false, // read-only
  enumerable: false, // not show up in array
  configurable: false, // can't delete the property
});

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// for (let key in person)
//   console.log(key);

// console.log(objectBase);
// console.log(descriptor);
delete person.name;

person.name = "Yang";
console.log(person);
console.log(Object.keys(person));
