function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(2));

// let m = (a) => multiply(a, 2);

// console.log(m(4));
