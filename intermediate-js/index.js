const array = [1,2,3,4,5]

// filter
const filteredArray = array.filter(num => num > 3)

console.log(filteredArray)

// reduce
const reducedArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, -15)

console.log(reducedArray)

// objects

// reference type
const obj1 = { val: 1 }
const obj2 = { val: 1 }
const obj3 = obj1 // reference to obj1 or a pointer

if (obj1 === obj3) {
	console.log('hi') // also with arrays
}

if (obj1 === obj2) {
	console.log('bye')
}

// context
const anotherObj = {
	hello: 1,
	bye: 2,
	try: 3,
	lol: function () {
		console.log('lol', this)
	}
}

console.log(anotherObj.lol())

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	intro() {
		console.log('hi i am '+ this.name);
		console.log('i am actually a '+ this.type);
	}
}

class Footballer extends Player {
	constructor(name, type, maxScore) {
		super(name, type);
		this.maxScore = maxScore;
	}

	score(score) {
		this.maxScore = this.maxScore + score;
	}

	getMaxScore() {
		console.log(this.maxScore);
	}

	introOfFootballer() {
		this.intro();
		console.log('hello gaaaiiiijjj')
	}
}

const player = new Footballer('Sid', 'Footballer', 10);

player.score(3)
player.getMaxScore()

// player.introOfFootballer()


