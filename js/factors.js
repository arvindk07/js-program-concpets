var number = prompt("Please enter a number");
for (var i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}
