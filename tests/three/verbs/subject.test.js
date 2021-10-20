import test from 'tape'
import nlp from '../_lib.js'
const here = '[three/verb-subjects]'

test('get verb subject', function (t) {
  let arr = [
    ['i am walking', 'i', 'am walking'],
    ['we are walking', 'we', 'are walking'],
    ['he let his dog walk', 'he', 'let'],
    ['the milkshakes tasted great', 'the milkshakes', 'tasted'],
    [`the ball game started`, 'the ball game', 'started'],
    ['Mr. Gretzky walks to the park', 'Mr. Gretzky', 'walks'],
    [`the ball games started`, 'the ball games', 'started'],
    ['A friend, answered the other.', 'A friend,', 'answered'],
    [`At Corky's carnival, this attraction uses the "human"`, 'this attraction', 'uses'],
    ['Former Congressman Tim Penny has raised the possibility', 'Former Congressman Tim Penny', 'has raised'],
    ["The TTC's Bloor-Danforth Line will turn 50 years old", 'Bloor-Danforth Line', 'will turn'],
    ["so we vigorously searched through my friend's selection", 'we', 'vigorously searched'],
    ['the Man professes love for ESPN reporter at Raptors Night', 'the Man', 'professes'],
    ['The Dirty Bird is opening a second location', 'The Dirty Bird', 'is opening'],
    ['With the endorphins released and the decreased inflammation I felt great.', 'the endorphins', 'released'],
    // ["At last the wind wizard's son said to the King.", "the wind wizard's son", 'said'],
    ['We are increasing border controls by 50 percent.', 'We', 'are increasing'],
    ["She says, 'Hey baby I just might take the chance'.", 'She', 'says'],
    ['We danced every slow one the band could play', 'We', 'danced'],
    ['You can stick your golden handshake', 'You', 'can stick'],
    ["Governor of New Jersey, she appointed the state's first female Attorney General", 'she', 'appointed'],
    ['the robber Captain carried a dagger under his garment.', 'the robber Captain', 'carried'],
    ['The newspaper supported the Whigs, (later Liberals).', 'The newspaper', 'supported'],
    ['Baby you can drive my car', 'you', 'can drive'],
    ['Aiyah, we go eat first then decide later lah.', 'we', 'go eat'],
    ['Experts warn against consuming adulterated oil', 'Experts', 'warn'],
    ['He slapped my face and he shook me like a rag doll', 'He', 'slapped'],
    ["she mistook the old woman's caution, and lingered for hours.", 'she', 'mistook'],
    ['this semi-truck is coming towards me.', 'this semi-truck', 'is coming'],
    ['the tornado, i guess, was fast', 'i', 'guess'],
    ['the new couple were dancing', 'the new couple', 'were dancing'],
    ['the new couple was dancing', 'the new couple', 'was dancing'],
    ['the people of toronto drove quickly', 'the people of toronto', 'drove quickly'],
    ['The magician, at her arrival, saved the Sultan', 'The magician', 'saved'],
    ['The auto mechanics that work for Auto Towing are very friendly', 'The auto mechanics', 'are'],
    // ['I went up to Mr. T and said', 'I', 'said'],
    ['Purchase of power from IPPs will ruin GEB', 'Purchase of power', 'will ruin'],
    ['Govt to blame for plastic mess; say manufacturers', 'manufacturers', 'say'],
    [`Even the IP and ICDC have abandoned the neighbourhood`, `the IP and ICDC`, `have abandoned`],
    [`They have sent over their top reporter Ahmed Mansour`, `They`, `have sent over`],
    [`He did once make an unforgivable error`, `He`, `did once make`],
    [`Al-Iraqiyah tv said that ICDC were controlling Ramadi.`, `Al-Iraqiyah tv`, `said`],
    // [`how it may affect the future`, `it`, `may affect`],
    [`Many people still believe that to be true`, `Many people`, `still believe`],
    [`As a parent, I can imagine how painful it must be`, `I`, `can imagine`],
    [`Read some of the following links`, ``, `Read`],
    [`You wonder if he was manipulating the market`, `he`, `was manipulating`],
    [`Your reply is good and deserves something`, `Your reply`, `is`],
    [`Your reply is good and deserves something`, `Your reply`, `deserves`],
    // [`dozens of school buses were submerged`, `dozens of school buses`, `were submerged`],
    // [`All Aries natives may have to tighten their belts and curb their desire`, `All Aries natives`, `may have to`],
    // [`All Aries natives may have to tighten their belts and curb their desire`, `All Aries natives`, `curb`],
    [`As a result, your finances improve`, `your finances`, `improve`],
    [`These leaps and bounds forward include love and creativity`, `These leaps and bounds forward`, `include`],
    // [`Your working life might not go so smoothly this year`, `Your working life`, `might not go so smoothly`],
    [`Flex your muscles, friend Libra, and prepare for an easy ride`, `friend Libra`, `prepare`],
    [`Your life might take on a new direction`, 'Your life', 'might take on'],

    // subordinate phrases
    [`all the days since december were awful`, 'all the days', 'were'],
  ]
  arr.forEach(a => {
    let [str, subject, verb] = a
    let vb = nlp(str).verbs()
    if (vb.length > 1) {
      vb = vb.if(verb).verbs()
    }
    let res = vb.subjects()
    t.equal(vb.text(), verb, here + `[vb] '${a[0]}'`)
    t.equal(res.text(), subject, here + `[subj] '${a[0]}'`)
  })
  t.end()
})
