// 1st pillar
function a() {
  let grandpa = 'hello grandpa'
  return function b() {
    let father = 'hello father'
    return function c() {
      let son = 'hello son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(a()()()) // hello grandpa > hello father > hello son

// why?

// memory efficient
function heavy(idx) {
  const arr = new Array(1000).fill('hi')
  console.log('created array')

  return arr[idx]
}

function heavy2() {
  const arr = new Array(1000).fill('hi')
  console.log('created array 2')

  return function (idx) {
    return arr[idx]
  }
}
const callingHeavy2 = heavy2();

console.log(heavy(100))
console.log(heavy(100))
console.log(heavy(100))

console.log('**********************************')

console.log(callingHeavy2(200))
console.log(callingHeavy2(200))
console.log(callingHeavy2(200))

// Encapsulation
const makeNuclearBtn = () => {
  var timeWithoutDestruction = 0;
  const totalPeaceTime = () => timeWithoutDestruction

  const launch = () => {
    timeWithoutDestruction = -1
    return 'boooooooooommmmmmmmmmmmmmmmm'
  }

  setInterval(() => {
    timeWithoutDestruction++;
  }, 1000)

  return {
    launch,
    totalPeaceTime
  }
}

const oHNo = makeNuclearBtn();
oHNo.launch()
