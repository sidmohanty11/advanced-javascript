let view;

function init() {
  let called = 0
  return function () {
    if (called > 0) {
      return;
    }
    view = 'init'
    called++
    console.log('view set')
  }
}

const startOnce = init()
startOnce()
startOnce()
startOnce()
console.log(view)