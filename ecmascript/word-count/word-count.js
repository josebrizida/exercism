'use strict'

function splitWords (s) {
  return s.trim().split(/[ \n\t]+/)
}

module.exports = class {
  count (s) {
    let wordCounts = {}
    for (const word of splitWords(s.toLowerCase())) {
      if (!wordCounts.hasOwnProperty(word)) {
        wordCounts[word] = 0
      }
      wordCounts[word]++
    }
    return wordCounts
  }
}
