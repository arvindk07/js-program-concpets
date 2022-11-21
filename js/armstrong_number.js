var number = prompt("please Enter a number");
var temp = number;
// var noOfDigits = number.toString().length;
var sum = 0;
while (temp > 0) {
  // console.log(temp);
  var digit = temp % 10;
  // console.log(digit);
  sum += digit ** 3;
  // sum += digit ** noOfDigits;
  console.log(digit);
  temp = parseInt(temp / 10);
  console.log(sum);
  console.log(number);
  // console.log(temp);
  // console.log("----------------");
}
if (sum == number) {
  console.log(`${number} is not armstrong number`);
} else {
  console.log(`${number} is not armstrong number`);
}
