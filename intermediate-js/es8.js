const obj = {
  hey: 'hey',
  bye: 'bye',
  lol: 'lol'
}

// Object.values()
Object.values(obj).forEach(val => {
  console.log(val);
});

// Object.entries()
Object.entries(obj).forEach((e) => {
  console.log(`e`, e)
})

// Object.keys()
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
