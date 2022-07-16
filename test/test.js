function outer() {
  result = 1;
  inner();
}
function inner() {
  console.log(result);
}

outer();
