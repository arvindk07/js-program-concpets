var number = prompt("Enter a Number");
var fact = 1;
if (number == 0) {
  console.log(`the factorial of ${number} is 1`);
} else if (number < 0) {
  console.log(`the factorial of negative number is not possible`);
} else {
  for (var i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log(`the factorial of ${number} is ${fact}`);
}
