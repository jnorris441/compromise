/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import nlp from './builds/compromise.cjs'
import text from '/Users/spencer/mountain/compromise/scripts/perf/flame/_sotu-text.js'

// nlp.verbose('tagger')

// bug!
// let doc = nlp(`extra. one two.`)
// doc.remove('extra')
// console.log(doc.text())

// let doc = nlp(`all the days since december were gross`)
let doc = nlp(`one two three four value in God's sight five six seven`).debug()
// let doc = nlp(text)
// doc.compute('chunks')
// doc.debug('chunks')
// doc.chunks().debug()
// doc.verbs().subjects().debug()
// console.log(doc.nouns().json())
//
/*












*/
