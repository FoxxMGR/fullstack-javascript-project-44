import readlineSync from 'readline-sync'
import process from 'process'
import welcomeUser from '../cli.js'

function playGame(game, rule) {
  const name = welcomeUser()
  console.log(rule())

  let i = 0
  while (i < 3) {
    const gameData = game()
    console.log('Question: ' + gameData.question)
    const usersAnswer = readlineSync.question('Your answer: ')
    const rightAnswer = gameData.rightAnswer

    if (rightAnswer == usersAnswer) {
      console.log('Correct!')

      i += 1
    }
    else {
      console.log('"' + usersAnswer + '"' + ' is wrong answer ;(. Correct answer was "' + rightAnswer + '".' + '\n' + 'Let\'s try again, ' + name + '!')

      process.exit(1)
    }
  }
  console.log('Congratulations, ' + name + '!')
}

export default playGame
