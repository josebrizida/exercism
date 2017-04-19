const Hamming = function () {}

Hamming.prototype.compute = function (s1, s2) {
  if (s1.length !== s2.length) {
    throw new Error('DNA strands must be of equal length.')
  }
  let count = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++
    }
  }
  return count
}

module.exports = Hamming
