function table(number) {
  for (var i = 1; i <= 10; i++) {
    var temp = number * i;
    console.log(`${number} x ${i}= ${temp}`);
  }
}
table(5);
table(12);
