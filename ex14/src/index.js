function myForLoop1() {
  var evenNumbers = "";
  var i = 0;
  for (i = 0; i <= 8; i++) {
    if (i % 2 == 0 && i != 8) {
      evenNumbers += i.toString() + "," + " ";
    } else if (i == 8) {
      evenNumbers += i.toString();
    }
  }
  return evenNumbers;
}

function myForLoop2() {
  var evenInverseNumbers = "";
  var i = 0;
  for (i = 8; i >= 0; i--) {
    if (i % 2 == 0 && i != 0) {
      evenInverseNumbers += i.toString() + "," + " ";
    } else if (i == 0) {
      evenInverseNumbers += i.toString();
    }
  }
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
  myForLoop1,
  myForLoop2,
};
