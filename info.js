const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['solidity', 'react', 'bootstrap'],
}
const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Javascript', 'Node.js'],
}
const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['html', 'CSS'],
}
const printInfo = (person) => {
  return (`${person.firstName} ${person.lastName} ${person.age}`)
}
const canVote = (person) => {
  return (person.age >= 18 ? true : false)
}
const mostSkillDev = (person, pers) => {
  if (person.language.length > pers.language.length) {
    return person.firstName
  } else if (person.language.length < pers.language.length) {
    return pers.firstName
  } else {
    return `draw`
  }
}
console.log(printInfo(alice))
console.log(canVote(charlie))
console.log(mostSkillDev(bob, charlie))