import welcomeUser from './cli.js'
import runGameRounds from './playGame.js'

export default function startGame(gameLogic, gameRule) {
  const userName = welcomeUser()
  console.log(gameRule)
  runGameRounds(gameLogic, userName)
}
