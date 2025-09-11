#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
console.log('Welcome to the Brain Games!')
const name = welcomeUser()
console.log('Answer "yes" if the number is even, otherwise answer "no".')

let i = 0
while (i < 3) {
  const randomInt = Math.floor(Math.random() * 100) // генератор чисел
  console.log('Question:' + randomInt)
  const answer = readlineSync.question('Your answer: ')

  if (randomInt % 2 === 0 & answer === 'yes') {
    console.log('Correct!')

    i += 1
  }
  else if (randomInt % 2 === 0 & answer !== 'yes') {
    console.log(answer + ' is wrong answer ;(. Correct answer was "yes".' + '\n' + 'Let\'s try again, ' + name)

    i = 0
  }
  else if (randomInt % 2 !== 0 & answer === 'no') {
    console.log('Correct!')

    i += 1
  }
  else if (randomInt % 2 !== 0 & answer !== 'no') {
    console.log(answer + ' is wrong answer ;(. Correct answer was "no".' + '\n' + 'Let\'s try again, ' + name)

    i = 0
  }
}

console.log('Congratulations,  ' + name)
