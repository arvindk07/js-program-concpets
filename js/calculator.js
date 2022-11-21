var num1 = prompt("Please enter 1st number");
var num2 = prompt("Please enter 2nd number");
var opr = prompt("please select among +,-,x,/");
switch (opr) {
  case "+":
    var res = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2}=${res}`);
    break;
  case "-":
    var res = parseFloat(num1) - parseFloat(num2);
    console.log(`${num1} - ${num2}=${res}`);
    break;
  case "x":
    var res = parseFloat(num1) * parseFloat(num2);
    console.log(`${num1} x ${num2}=${res}`);
    break;
  case "/":
    var res = parseFloat(num1) / parseFloat(num2);
    console.log(`${num1} / ${num2}=${res}`);
    break;
  default:
    console.log("Invalid opertors");
}
