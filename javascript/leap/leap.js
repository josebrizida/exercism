//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
  this.year = year
}

Year.prototype.isLeap = function () {
  if (this.year % 400 === 0) {
    return true
  }
  if (this.year % 100 === 0) {
    return false
  }
  if (this.year % 4 === 0) {
    return true
  }
  return false
}

var Person = function (first, last, age) {
  this.firstName = first
  this.lastName = last
  this.age = age
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

Person.prototype.increaseAge = function (howMuch) {
  if (howMuch === undefined) {
    this.age++
  } else {
    this.age += howMuch
  }
}

Person.prototype.getAge = function () {
  return this.age
}

var mike = new Person('Mike', 'Jordan', 36)
var elon = new Person('Elon', 'Musk', 39)

console.log(mike)
console.log(elon)

console.log(mike.getFullName())

function doIt (f) {
  return f()
}

let gFN = mike.getFullName
console.log(gFN())

mike.increaseAge(10)
console.log(mike)
mike.increaseAge()
mike.increaseAge()
mike.increaseAge()
mike.increaseAge()
mike.increaseAge()
console.log(mike.getAge())
console.log(elon.getFullName())
console.log(elon.getAge())

module.exports = Year
