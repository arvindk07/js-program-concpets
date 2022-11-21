var a = prompt("Please eneter a");
var b = prompt("Please eneter b");
var c = prompt("Please eneter c");

var res1 = a % 10;
var res2 = b % 10;
var res3 = c % 10;

if (res1 == res2 && res1 === res3) {
  console.log(`${b}, ${b}, ${c} are having the same last digit`);
} else {
  console.log(`${b}, ${b}, ${c} are not having the same last digit`);
}
