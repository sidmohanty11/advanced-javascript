// or lexical scope or lexical analysis

// lexical => where you write something!

// ---- THIS IS THE WORLD OF FUNCTION 'global' or global context ----

function a() {
  // ---- THIS IS THE WORLD OF FUNCTION 'a' ----

  // data + variables inside function a
  var a;
  function b() {
    // this func is lexically inside function a
  }
}