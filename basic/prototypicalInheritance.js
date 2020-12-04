function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicate");
};

// call super constructor
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // objectBase

// circle instance > circle base > shpae base > shape object
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
// Circle.prototype = Object.create(Shape.prototype);

// reset constructor
// Circle.prototype.constructor = Circle;

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// intermediate function inheritance
extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}

// const s = new Shape();
// const c = new Circle(1, "Red");

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

extend(Square, Shape);
