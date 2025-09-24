import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

export default function startEvenGame() {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'
  function gameLogic() {
    const randomInt = generateRandomNumber(100)
    let rightAnswer
    if (randomInt % 2 === 0) {
      rightAnswer = 'yes'
    }
    else {
      rightAnswer = 'no'
    }
    return { question: randomInt, rightAnswer }
  }
  startGame(gameLogic, gameRule)
}
