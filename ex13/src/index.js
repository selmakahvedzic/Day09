function inverseWhile() {
  var i = 5;
  var fiveNumbers = "";
  while (i >= 0) {
    if (i > 0) {
      fiveNumbers += i.toString() + ",";
    } else {
      fiveNumbers += i.toString();
    }
    i--;
  }
  return fiveNumbers;
}

console.log(inverseWhile());
module.exports = inverseWhile;
