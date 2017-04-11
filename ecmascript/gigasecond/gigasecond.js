//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Gigasecond {
  constructor (date) {
    this.input = date
  }

  date () {
    return new Date(this.input.valueOf() + 1000000000000)
  }
}

export default Gigasecond
