var string = prompt("Please Enter a number");
var letter = prompt("Please Enter a letter");
let strLen = string.length;
var counter = 0;
for (var i = 0; i < strLen; i++) {
  if (string[i] == letter) {
    counter++;
  }
}
console.log(`${string} =>${letter}=>${counter}`);
