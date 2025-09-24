import readlineSync from 'readline-sync'

function runGameRounds(gameLogic, userName) {
  const roundsToWin = 3
  for (let round = 0; round < roundsToWin; round++) {
    const gameData = gameLogic()
    console.log('Question: ' + gameData.question)
    const usersAnswer = readlineSync.question('Your answer: ')
    const rightAnswer = gameData.rightAnswer

    if (rightAnswer == usersAnswer) {
      console.log('Correct!')
    }
    else {
      console.log('"' + usersAnswer + '"' + ' is wrong answer ;(. Correct answer was "' + rightAnswer + '".' + '\n' + 'Let\'s try again, ' + userName + '!')

      return
    }
  }
  console.log('Congratulations, ' + userName + '!')
}

export default runGameRounds
