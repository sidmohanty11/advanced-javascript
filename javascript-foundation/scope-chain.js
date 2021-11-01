// lexical scope => available data + variables where function was defined

var x = "x";

function printName() {
  console.log(x); // all of the functions have access to global variables
  var c = "c";
  console.log("Sidharth");
}

function findName() {
  var b = "b";
  console.log("findName");
  return printName();
}

function sayMyName() {
  var a = "a";
  console.log("sayMyName");
  return findName();
}

sayMyName();

// chaining
function sayMyName2() {
  var a = "a";
  return function findName2() {
    var b = "b";
    // console.log(c); // RefError: Not defined
    return function printName2() {
      var c = "c";
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(x);

      console.log("Sidharth");
    };
  };
}

sayMyName2()()();
