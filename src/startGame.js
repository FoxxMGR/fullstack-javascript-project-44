import welcomeUser from './cli.js'
import getRules from './getRules.js'
import runGameRounds from './playGame.js'

export default function startGame(gameLogic, gameRule) {
  const userName = welcomeUser()
  getRules(gameRule)
  runGameRounds(gameLogic, userName)
}
