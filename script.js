function welcomeMsg(a) {
  return "Welcome " + a + "!";
}

console.log(welcomeMsg("Jane"));

function calcGrossPrice(a, b) {
  return a + a * b;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  return Math.sqrt(a ** 2) + Math.sqrt(b ** 2);
}

console.log(addPositive(2, 3));

console.log(addPositive(3, -5));

console.log(addPositive(-1, -8));
