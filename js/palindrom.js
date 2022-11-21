// using for loop
var string = prompt("Enter a string");
var len = string.length;
var msg = "It is a palindrom";
for (var i = 0; i < len / 2; i++) {
  if (string[i] != string[len - 1 - i]) {
    msg = "it is not a palindrom";
  }
}
console.log(`${string}:${msg}`);

// by using array methods

var string = prompt("Enter a string");
var stringArray = string.split("");
var stringArrayRev = stringArray.reverse();
var revString = stringArrayRev.join("");
if (string === revString) {
  console.log(`${string}: is Palindrom`);
} else {
  console.log("not palindron");
}

// usin for loop
