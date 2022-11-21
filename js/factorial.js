var number = prompt("Pkease Enter a number");
var fact = 1;
function factr(n) {
  if (n > number) {
    return;
  }
  fact = fact * n;
  //   console.log(fact);
  n++;
  factr(n);
  console.log(fact);
}
factr(1);
