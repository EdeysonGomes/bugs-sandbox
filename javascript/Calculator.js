function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  if (b > a)
    return b - a;
  else
    return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function test(result, expected) {
  if (result !== expected) {
    console.log("Test FAIL");
    return false;
  }
  console.log("Test OK");
  return true;
}

let testResult = true;
testResult &= test(sum(10, 2), 12);
testResult &= test(sub(0, 2), 2);
testResult &= test(sub(2, 10), 8);
testResult &= test(div(10, 2), 5);
testResult &= test(div(10, 0), null);
testResult &= test(mul(10, 2), 20);

if (!testResult) {
  throw Error("Nem todos os testes passaram.");
}
