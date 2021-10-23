// flat => one level flatten (by default)

const arr = [[1,2,3,4,5], [6,7,8,[9,[10]]]];

console.log(arr.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// flatMap

console.log(arr.flatMap(val => val))

const users = [['sid', 'hello'], ['lol', 'hello'], ['lol2', 'hello']]

console.log(Object.fromEntries(users))

// try catch

try {
  console.log(array)
} catch (err) {
  console.log(err.message)
}