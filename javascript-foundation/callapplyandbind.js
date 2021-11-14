function hi() {
  console.log('hi');
}

hi.call() // hi
hi.apply() // hi

const wizard = {
  name: 'merlin',
  health: 90,
  heal(number) {
    this.health += number;
    console.log(`${ this.name } has now ${ this.health } health`);
  }
}

const archer = {
  name: 'robin hood',
  health: 40,
}

wizard.heal.call(archer, 10); // "this" becomes archer, ...args
wizard.heal.apply(archer, [10]); // "this" becomes archer, [args]
const healArcherFunction = wizard.heal.bind(archer, 10); // makes another func with some other object
healArcherFunction();
