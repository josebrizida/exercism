"use strict";

function getFactors (n) {
  let factors = []
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }
  return factors
}

function getAliquotSum (n) {
  return getFactors(n).reduce((acc, n) => acc + n, 0)
}

class PerfectNumbers {
  classify (n) {
    if (n <= 0) {
      return 'Classification is only possible for natural numbers.'
    }
    let aliquotSum = getAliquotSum(n)
    if (aliquotSum === n) {
      return 'perfect'
    }
    if (aliquotSum > n) {
      return 'abundant'
    }
    if (aliquotSum < n) {
      return 'deficient'
    }
  }
}

export default PerfectNumbers