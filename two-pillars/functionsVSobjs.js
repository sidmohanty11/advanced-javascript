const fn = new Function('console.log("lol, its a function")');
const fn2 = new Function('number', 'console.log("lol, its a function and number is", number)');

fn()
//lol, its a function
fn2(2)
//lol, its a function and number is 2

// -------------------

// functions are first class citizens in JS
// 1. fns can be assigned to vars and props
var stuff = function () {}
// 2. pass functions as args to fns
function a(fn) {
  fn();
}
// 3. return another function
function m() {
  return function n() {
    console.log('hi');
  }
}
