function check(p, q, r) {
  if (p >= q && p >= r) {
    return p;
  } else if (q >= p && q >= r) {
    return q;
  } else {
    return r;
  }
}

var a = prompt("Please Enter the first Number");
var b = prompt("Please Enter the second Number");
var c = prompt("Please Enter the third Number");

// using Math ----------------------------
// var x = Math.max(a, b, c);

//  using function
var x = check(a, b, c);
console.log(`${a}, ${b}, ${c}: largest: ${x}`);
