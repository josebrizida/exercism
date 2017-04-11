//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isUpperCase (c) {
  return c === c.toUpperCase()
}

function isLetter (c) {
  return c.toLowerCase() !== c.toUpperCase()
}

class Bob {
  hey (message) {
    if (message.trim() === '') {
      return 'Fine. Be that way!'
    }
    let areAllUpperCase = true
    let hasLetters = false
    for (const c of message) {
      areAllUpperCase = areAllUpperCase && (!isLetter(c) || isUpperCase(c))
      hasLetters = hasLetters || isLetter(c)
      if (!areAllUpperCase) {
        break
      }
    }
    if (hasLetters && areAllUpperCase) {
      return 'Whoa, chill out!'
    }
    if (message.slice(-1) === '?') {
      return 'Sure.'
    }
    return 'Whatever.'
  }
}

export default Bob
