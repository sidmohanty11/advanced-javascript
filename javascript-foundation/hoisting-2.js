// during hoisting, one = undefined

var one = 1;
var one = 2;

console.log(one);
console.log(a());

function a() {
  return 'hi'
}

// it will rewrite the function 'a' in memory to this one or the last one
function a() {
  return 'bye'
}

var favFood = 'grapes'

var foodThoughts = function () {
  // in this world,
  // var favFood = undefined; // (hoisting)
  console.log('original fav food: '+ favFood) // undefined
  
  // hoisting happens on every execution context!!!!!
  var favFood = "sushi"

  console.log('new fav food: '+ favFood) // sushi
}

foodThoughts()

function bigBrother(){
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  // this one will be called
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());