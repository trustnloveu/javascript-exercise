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

// Prototype Members
Cricle.prototype.draw = function () {
  // this.move();
  console.log("draw");
};

// Prototypical Inheritance
Cricle.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

const c1 = new Cricle(1);
const c2 = new Cricle(1);
