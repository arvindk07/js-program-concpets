// using recussiom

var number = prompt("Please Enter a number");
function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}
var res = sum(parseInt(number));
console.log(res);
