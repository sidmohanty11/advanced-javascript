// numbers, strings, booleans, undefined, null, Symbol, Object

// primitive
typeof 5 // number
typeof true // boolean
typeof 'hi' // string
typeof undefined // undefined
typeof null // ------ object -------
typeof Symbol('justme') // symbol (ES6)

// non-primitive
typeof {} // object
typeof [] // object
typeof function() {} // function
// but all functions are objects
// example,

function a() {
  return 'ipasdja'
}

a.hi = 'hi'

console.log(a.hi); // hi

true.toString(); // => Boolean(true).toString(); // wrapper object
