//  using temp variable

// let a = prompt("Please enter the a value ");
// let b = prompt("Please enter the b value ");

// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(`The value of a is: ${a}, the value of b is: ${b}`);

// without using temp variable

let x = parseInt(prompt("Please enter the x value "));
let y = parseInt(prompt("Please enter the y value "));

x = x + y;
y = x - y;
x = x - y;

console.log(
  `After Swapping: \n The value of x is: ${x}, the value of y is: ${y}`
);
