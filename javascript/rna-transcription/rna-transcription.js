const RNA_MAP = new Map([
  ['C', 'G'],
  ['G', 'C'],
  ['T', 'A'],
  ['A', 'U']
])

const DnaTranscriber = function () {}

DnaTranscriber.prototype.toRna = function (dna) {
  let rna = ''
  for (const c of dna) {
    const rnaC = RNA_MAP.get(c)
    if (!rnaC) {
      throw new Error('Invalid input')
    }
    rna += rnaC
    // if (c === 'C') {
    //   rna += 'G'
    // } else if (c === 'G') {
    //   rna += 'C'
    // } else if (c === 'T') {
    //   rna += 'A'
    // } else if (c === 'A') {
    //   rna += 'U'
    // } else {
    //   throw new Error('Invalid input')
    // }
  }
  return rna
}

module.exports = DnaTranscriber
