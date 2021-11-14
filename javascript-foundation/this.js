// this is the object that the function is a property of

const obj = {
  name: 'Sid',
  somefunc() {
    console.log(`${ this.name } says ${ this.hi }`)
  },
  hi: 'hi',
  bye: 'bye'
}

const name = 'Ram'
function vip() {
  console.log(this.name, 'is a vip')
}
const obj1 = {
  name: 'Ramu',
  vip,
}
const obk2 = {
  name: 'Kalia',
  vip,
}

console.log(vip()) // should return Ram
console.log(obj1.vip()) // Ramu is a vip

// this => { name: 'Sid', somefunc: [Function: somefunc], hi: 'hi', bye: 'bye' }

console.log(obj.somefunc())

// interesting GOTCHASSS

const myObj = {
  name: 'Sidharth',
  sing() {
    console.log('LALALALALALAL', this);
    var anotherFunc = function () {
      console.log('Inside AnotherFunc', this) // this gives the global object for dynamic scope
    }
    anotherFunc()
  }
}

myObj.sing()

const myObj2 = {
  name: 'Ram Charan',
  sing() {
    console.log('LALALALALALAL', this);
    var anotherFunc = () => { // arrow functions are lexically bound
      console.log('Inside AnotherFunc', this) 
    }
    anotherFunc()
  }
}

myObj2.sing()

// before arrow functions
const myObj3 = {
  name: 'Lol',
  sing() {
    console.log('LALALALALALAL', this);
    const self = this;
    var anotherFunc = function () {
      console.log('Inside AnotherFunc', this)
      console.log(self); // LALALALALALAL { name: 'Lol', sing: [Function: sing] }
    }
    return anotherFunc.bind(this); // LALALALALALAL { name: 'Lol', sing: [Function: sing] }
  }
}

myObj3.sing()