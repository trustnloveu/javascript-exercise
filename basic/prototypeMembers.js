function Cricle(radius) {
  // Instance Members
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log("move");
  };

  // this.draw = function () {
  //     console.log('draw');
  // }
}

// Order of creating class doesn't matter, because modification will be visibly reflected as soon as it happend
const c1 = new Cricle(1);

// Prototype Members
Cricle.prototype.draw = function () {
  // this.move();
  console.log("draw");
};

// Prototypical Inheritance
Cricle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

// Only returns instance members
// You can't see draw, because it's a prototype member, not instance member
console.log(Object.keys(c1));

// returns all members
for (let key in c1) console.log(key);

// (+) you can check instance(own) members with hasOwnProtpery("name of it") method
c1.hasOwnProperty("radius"); // true
c1.hasOwnProperty("draw"); // false
