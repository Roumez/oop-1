class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    return (`${this.firstName} ${this.lastName} ${this.age}`)
  }
  canVote() {
    return (this.age >= 18 ? true : false)
  }
  mostSkilledDev(Human) {
    if (this.language.length > Human.language.length) {
      return this.firstName
    } else if (this.language.length < Human.language.length) {
      return this.firstName
    } else {
      return `draw`
    }
  }
}
exports.Person = Human