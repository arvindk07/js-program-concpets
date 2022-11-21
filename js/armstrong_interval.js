var a = prompt("Please enter lower number");
var b = prompt("Please enter upper number");
for (var i = a; i <= b; i++) {
  var temp = i;
  var noOfDigit = i.toString().length;
  var sum = 0;
  while (temp > 0) {
    var digit = temp % 10;
    temp = parseInt(temp / 10);
    sum += digit ** noOfDigit;
  }
  if (sum == i) {
    console.log(i);
  }
}
