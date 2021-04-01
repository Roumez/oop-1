// const { Person } = require('./classInfo')

// const alice = new Person('Alice', 'Liddell', 28, ['solidity', 'react', 'bootstrap'])
// const bob = new Person('Bob', 'Lemon', 30, ['Javascript', 'Node.js'])
// const charlie = new Person('Charlie', 'Charlot', 8, ['html', 'CSS'],)

// console.log(alice.printInfo())
// console.log(charlie.canVote())
// console.log(bob.mostSkilledDev(charlie))


const { P } = require('./point.js')

// p1 est une instance de Point
const p1 = new P(1, 2)
// p2 est une autre instance de Point
const p2 = new P(10, 11)

console.log(p1.show())
console.log(p1.isEqual(p2))
console.log(p1.distance(p2))