function f(n) {
  if (n === 0) throw Error("Recursion error at base case");
  debugger;
  f(n - 1);
}
f(10);
