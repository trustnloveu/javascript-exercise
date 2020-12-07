class Human {
  constructor() {
    this.gender = "female";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    // You must call the super constructor in the drived class
    // If you're extending another class, and implementing the constrctor which you don't have
    // then, you have to add 'super()'
    //      >   this keyword simply executes the parent constructor
    super();
    // you can add ti any class which'll be executed
    // whenever you instantiate the class

    // Here, you can se"t up properties with 'this' keyword
    this.name = "Austin";
    // overwrite
    this.gender = "male";
  }

  // method
  printName() {
    console.log(this.name);
  }

  // property
}

// calling class with 'new'
const person = new Person();
person.printName();
person.printGender();
