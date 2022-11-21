// var string = "Mr. red has a red red car and red bike";
// var newString = string.replace("red", "blue");
// console.log(newString);

// using regex
var string = "Mr. red has a red red car and red bike";
var reg = new RegExp("Red", "gi");
var newString = string.replace(reg, "Blue");

console.log(newString);
