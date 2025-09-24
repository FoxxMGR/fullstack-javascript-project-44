import generateRandomNumber from '../utils.js'
import startGame from '../startGame.js'

export default function startGcdGame() {
  const gameRule = 'Find the greatest common divisor of given numbers.'
  function gameLogic() {
    const randomIntA = generateRandomNumber(100)
    const randomIntB = generateRandomNumber(100)
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
  startGame(gameLogic, gameRule)
}
