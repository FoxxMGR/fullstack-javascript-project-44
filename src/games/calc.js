import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

const gameRule = 'What is the result of the expression?'

function generateRound() {
  const operations = ['+', '-', '*']
  const randomOperation = operations[generateRandomNumber(operations.length)]
  const randomIntA = generateRandomNumber(100)
  const randomIntB = generateRandomNumber(100)

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

  return {
    question: `${randomIntA} ${randomOperation} ${randomIntB}`,
    rightAnswer,
  }
}

export default function startCalcGame() {
  startGame (generateRound, gameRule)
}
