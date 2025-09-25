import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

const gameRule = 'What number is missing in the progression?'

function generateRound() {
  const firstTerm = generateRandomNumber(20) + 1
  const commonDifference = generateRandomNumber(10) + 1
  const progression = []

  for (let i = 0; i < 10; i++) {
    progression.push(firstTerm + i * commonDifference)
  }
  const skipPosition = generateRandomNumber(9) + 1
  const rightAnswer = progression[skipPosition]
  const progressionWithSkip = [...progression]
  progressionWithSkip[skipPosition] = '..'

  return {
    question: progressionWithSkip.join(' '),
    rightAnswer,
  }
}

export default function startProgressionGame() {
  startGame(generateRound, gameRule)
}
