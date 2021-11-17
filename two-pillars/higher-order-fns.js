function hof() {
  return function anotherfn() {
    console.log('lol');
  }
}
// or
function hof2(fn) {
  return fn;
}