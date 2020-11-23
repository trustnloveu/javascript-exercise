// getters => access properties
// setters => change (mutate) the

// person object
const person = {
  firstName: "Austin",
  lastName: "Yang",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Euijin Yang";
console.log(person);

// circle object
const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
