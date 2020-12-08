// Set default value in parametes
function interestA(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

// declare parameter in context (turthy | falsey)
console.log(interestA(10000));
console.log(interestA(10000, undefined, 5));

function interestB(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interestB(10000));
console.log(interestB(10000, undefined, 5));
