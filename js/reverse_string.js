var string = prompt("Enter a String");
var strLen = string.length;
var revStr = "";
for (var i = strLen - 1; i >= 0; i--) {
  revStr += string[i];
}
console.log(`${string} reverse is ${revStr}`);

var string = prompt("Enter a String");
var stringArray = string.split(" ");
// var arrangedString = stringArray.sort();
stringArray.sort();

console.log(stringArray.join(" "));
