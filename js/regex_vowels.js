var string = prompt("Please enter a string");
const reg = /[aeiou]/gi;
var chars = string.match(reg);
console.log(chars.join(","));
console.log(chars.length);
