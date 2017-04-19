// let Car = function (speed, brand, color) {
//   this.speed = speed
//   this.brand = brand
//   this.color = color
// }

// Car.prototype.increaseSpeed = function (inc) {
//   this.speed += inc
// }

// Car.prototype.changeColor = function (color) {
//   this.color = color
// }

// Car.prototype.getSpeed = function () {
//   return this.speed
// }

// Car.prototype.getColor = function () {
//   return this.color
// }

// Car.prototype.getBrand = function () {
//   return this.brand
// }

class Car {
  constructor (speed, brand, color) {
    this.speed = speed
    this.brand = brand
    this.color = color
  }

  increaseSpeed (inc) {
    this.speed += inc
  }

  changeColor (color) {
    this.color = color
  }

  getSpeed () {
    return this.speed
  }

  getColor () {
    return this.color
  }

  getBrand () {
    return this.brand
  }
}

let opelCorsaB = new Car(140, 'Opel Corsa B', 'vermelho')
opelCorsaB.increaseSpeed(10)
opelCorsaB.changeColor('verde')

console.log(opelCorsaB.getSpeed())
console.log(opelCorsaB.getColor())
console.log(opelCorsaB.getBrand())

let toyotaSupra = new Car(200, 'Toyota Supra', 'branco')
toyotaSupra.increaseSpeed(50)
toyotaSupra.changeColor('preto')
