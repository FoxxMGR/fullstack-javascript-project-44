export function getRule() {
  return 'What is the result of the expression?'
}
export function calcGame() {
  const operations = ['+', '-', '*']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)]
  const randomIntA = Math.floor(Math.random() * 100) // генератор чисел
  const randomIntB = Math.floor(Math.random() * 100)
  let rightAnswer
  switch (randomOperation) {
    case '+':
      rightAnswer = randomIntA + randomIntB
      break
    case '-':
      rightAnswer = randomIntA - randomIntB
      break
    case '*':
      rightAnswer = randomIntA * randomIntB
      break
  }
  return { question: randomIntA + ' ' + randomOperation + ' ' + randomIntB, rightAnswer }
}
