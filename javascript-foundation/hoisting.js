// behaviour 

console.log('1------')
console.log(sing()) // functions are fully hoisted
//console.log(sing2()) // sing2 is not a function or is undefined
console.log(t) // undefined, variables are partially hoisted

var t = 'bear'
// let t or const t are not hoisted

// function expression
var sing2 = function() {
  return 'uhhh lalalala'
}
// console.log(sing2()) //uhhh lalalala

// function declaration
function sing() {
  return 'ohhhh lalllala'
}

// (function sing() {
//   return 'ohhhh lalllala'
// }) // sing is not defined, not hoisted