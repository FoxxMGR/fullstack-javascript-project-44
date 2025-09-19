export function getRule() {
  return 'Find the greatest common divisor of given numbers.'
}
export function gcdGame() {
  const randomIntA = Math.floor(Math.random() * 100) // генератор чисел
  const randomIntB = Math.floor(Math.random() * 100)
  let a = randomIntA
  let b = randomIntB
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  const rightAnswer = a
  return { question: randomIntA + ' ' + randomIntB, rightAnswer }
}
