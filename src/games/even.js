import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

function generateRound() {
  const randomInt = generateRandomNumber(100)
  let rightAnswer

  if (randomInt % 2 === 0) {
    rightAnswer = 'yes'
  }

  else {
    rightAnswer = 'no'
  }

  return {
    question: randomInt,
    rightAnswer,
  }
}

export default function startEvenGame() {
  startGame(generateRound, gameRule)
}
