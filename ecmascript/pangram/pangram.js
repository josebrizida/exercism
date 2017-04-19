function containsChar (c, s) {
  return s.indexOf(c) !== -1
}
class Pangram {
  constructor (string) {
    this.s = string
  }

  isPangram () {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    for (const c of abc) {
      if (!containsChar(c, this.s)) {
        return false
      }
    }
    return true
  }
}

// let Pangram = function (string) {
// }
//
// Pangram.prototype.isPangram = function () {
//   return true
// }

module.exports = Pangram
