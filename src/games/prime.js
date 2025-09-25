import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

function generateRound() {
  const randomInt = generateRandomNumber(100)

  let rightAnswer

  function isPrimeSimple(n) {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }

    return true
  }

  if (isPrimeSimple(randomInt)) {
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

export default function startPrimeGame() {
  startGame(generateRound, gameRule)
}
