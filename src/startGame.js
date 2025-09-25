import welcomeUser from './cli.js'
import readlineSync from 'readline-sync'

export default function startGame(generateRound, gameRule) {
  const userName = welcomeUser()
  console.log(gameRule)
  const roundsToWin = 3

  for (let round = 0; round < roundsToWin; round++) {
    const gameData = generateRound()
    console.log(`Question: ${gameData.question}`)
    const usersAnswer = readlineSync.question('Your answer: ')
    const rightAnswer = gameData.rightAnswer

    if (rightAnswer == usersAnswer) {
      console.log('Correct!')
    }

    else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`)
      console.log(`Let's try again, ${userName}!`)

      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
