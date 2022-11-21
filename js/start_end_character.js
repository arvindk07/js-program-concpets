var string = prompt("Please Enter a number");
var testStart = string.startsWith("w");
var testEnd = string.endsWith("v");
console.log(`starts: ${testStart}`);
console.log(`starts: ${testEnd}`);

if (testStart == true && testEnd == true) {
  console.log(`${string} starts with w and end with v`);
} else if (testStart == true && testEnd == false) {
  console.log(`${string} starts with w `);
} else if (testStart == false && testEnd == true) {
  console.log(`${string} starts with v `);
} else {
  console.log(`${string} neither start with w nor end with v`);
}
