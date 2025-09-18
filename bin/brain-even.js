#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
import process from 'process'
console.log('Welcome to the Brain Games!')
const name = welcomeUser()
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let i = 0
while (i < 3) {
  const randomInt = Math.floor(Math.random() * 100) // генератор чисел
  console.log('Question: ' + randomInt)
  const usersAnswer = readlineSync.question('Your answer: ')
  let rightAnswer
  if (randomInt % 2 === 0) {
    rightAnswer = 'yes'
  }
  else {
    rightAnswer = 'no'
  }

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
