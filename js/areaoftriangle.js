// -------------Trignle

// var base = prompt("Please Enter the base value", "");
// var height = prompt("Please Enter the height value", "");

// var areaoftriangle = (base * height) / 2;

// console.log(areaoftriangle);

// --------------by using heron's formula  -------------

var a = 10;
var b = 5;
var c = 10;

var s = (a + b + c) / 2;

var area = Math.sqrt(s);

var temp = s * (s - a) * (s - b) * (s - c);

console.log(temp);

var totalArea = Math.sqrt(temp);

console.log(totalArea);
