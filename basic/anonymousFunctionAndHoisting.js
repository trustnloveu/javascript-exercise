// 'Hoisting' will occur, if you call function before declaration

// walk();

// Standard Function Declaration
function walk() {
  console.log("walk");
}

// Anonymous Function Expression
let run = function () {
  console.log("run");
};

// sharing same function reference
let move = run;

walk();
run();
move();
