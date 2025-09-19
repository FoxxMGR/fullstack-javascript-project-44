#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
import process from 'process'
const name = welcomeUser()
console.log('Find the greatest common divisor of given numbers.')

let i = 0
while (i < 3) {
  const randomIntA = Math.floor(Math.random() * 100) // генератор чисел
  const randomIntB = Math.floor(Math.random() * 100)
  console.log('Question: ' + randomIntA + ' ' + randomIntB)
  let a = randomIntA
  let b = randomIntB
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  const rightAnswer = a
  const usersAnswer = readlineSync.question('Your answer: ')

  if (usersAnswer == rightAnswer) {
    console.log('Correct!')

    i += 1
  }
  else if (usersAnswer != rightAnswer) {
    console.log(usersAnswer + ' is wrong answer ;(. Correct answer was ' + rightAnswer + '.' + '\n' + 'Let\'s try again, ' + name + '!')

    process.exit(1)
  }
}

console.log('Congratulations, ' + name + '!')
