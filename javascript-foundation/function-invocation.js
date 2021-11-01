// func declaration
function India() {
  console.log('warm');
}

// func expression
var Canada = function () {
  console.log('cold');
}

// function invocation/call/execution
Canada()
India()

function marry(p1, p2) {
  console.log(arguments)
}

function marry2(...args) {
  console.log(args)
}

marry('tim', 'tina')
marry2('tim', 'tina')