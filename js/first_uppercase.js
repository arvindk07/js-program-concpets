var string = prompt("Plaese enter a string");
// console.log(string);
var first = string.charAt(0);
// console.log(first);
// console.log(first.toUpperCase());
var rem = string.slice(1);
// console.log(rem);
var caps = first.toUpperCase() + rem;
console.log(`Final :${caps}`);
