const arr = [1,2,3,4]

// part of global scope
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('i am at index', arr[i])
  }, 3000)
}

// let uses block scoping { ... }
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('i am at index', arr[i])
  }, 3000)
}

for (var i = 0; i < arr.length; i++) {
  (function(cI) {
    setTimeout(function() {
      console.log('i am at index', arr[cI])
    }, 3000)
  })(i)
}
