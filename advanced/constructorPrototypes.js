Object.getPrototypeOf(obj);

// obj.__proto__ = Object.prototype
// arr.__proto__ = Array.prototype
// circle.__protp__ = Cricle.protoytype

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype;

const circle = new Circle(1);
