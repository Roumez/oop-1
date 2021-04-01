const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['solidity', 'react'],
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
  language: ['html', 'CSS']
}
const printInfo = (person) => {
  return (`${person.firstName} ${person.lastName} ${person.age}`)
}
const canVote = (person) => {
  return (person.age >= 18 ? true : false)
}
const mostSkillDev = (person) => {
  return (${ person.language } )
}


console.log(printInfo(alice))
console.log(canVote(charlie))
console.log(mostSkillDev(alice))