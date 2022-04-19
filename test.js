let a = Array.from(Array(10), () => {
  return Array(10);
});
a[0][0] = 1;
console.log(a);
