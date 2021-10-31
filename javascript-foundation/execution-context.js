// 1. execution context
var a = 'Sidharth'

function printName() {
  console.log(a)
}

function findName() {
  console.log('findName')
  return printName()
}

function sayMyName() {
  console.log('sayMyName')
  return findName()
}

sayMyName()
