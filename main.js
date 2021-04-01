const { Person } = require('./classInfo')

const alice = new Person('Alice', 'Liddell', 28, ['solidity', 'react', 'bootstrap'])
const bob = new Person('Bob', 'Lemon', 30, ['Javascript', 'Node.js'])
const charlie = new Person('Charlie', 'Charlot', 8, ['html', 'CSS'],)

console.log(alice.printInfo())
console.log(charlie.canVote())
console.log(bob.mostSkilledDev(charlie))