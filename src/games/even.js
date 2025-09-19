export function getRule() {
  return 'Answer "yes" if the number is even, otherwise answer "no".'
}
export function evenGame() {
  const randomInt = Math.floor(Math.random() * 100) // генератор чисел

  let rightAnswer
  if (randomInt % 2 === 0) {
    rightAnswer = 'yes'
  }
  else {
    rightAnswer = 'no'
  }
  return { question: randomInt, rightAnswer }
}
