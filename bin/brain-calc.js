#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
import process from 'process'
console.log('Welcome to the Brain Games!')
const name = welcomeUser()
console.log('What is the result of the expression?')

let i = 0
while (i < 3) {
  const operations = ['+', '-', '*']
  const randomOperation = operations[Math.floor(Math.random() * operations.length)]
  const randomIntA = Math.floor(Math.random() * 100) // генератор чисел
  const randomIntB = Math.floor(Math.random() * 100)
  console.log('Question: ' + randomIntA + ' ' + randomOperation + ' ' + randomIntB)
  let rightAnswer
  switch (randomOperation) {
    case '+':
      rightAnswer = randomIntA + randomIntB
      break
    case '-':
      rightAnswer = randomIntA - randomIntB
      break
    case '*':
      rightAnswer = randomIntA * randomIntB
      break
  }
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
