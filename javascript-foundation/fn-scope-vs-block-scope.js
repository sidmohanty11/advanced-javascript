if (5 > 4) {
  var secret = `1221q31313`;
  let secret2 = `iosafioasj`; // block scoped
}

console.log(secret);
// console.log(secret2); // can't be used

function loop() {
  // if we use let, it becomes block scoped
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("final", i);
}

loop();
