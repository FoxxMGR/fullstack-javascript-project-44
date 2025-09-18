#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
import process from 'process'
console.log('Welcome to the Brain Games!')
const name = welcomeUser()
console.log('What number is missing in the progression?')

let i = 0
while (i < 3) {
  const firstTerm = Math.floor(Math.random() * 20) + 1 // генератор чисел
  const commonDifference = Math.floor(Math.random() * 10) + 1
  const progression = []
  for (let i = 0; i < 10; i++) {
    progression.push(firstTerm + i * commonDifference)
  }
  const skipPosition = Math.floor(Math.random() * 9) + 1
  const rightAnswer = progression[skipPosition]
  const progressionWithSkip = [...progression]
  progressionWithSkip[skipPosition] = '..'
  console.log('Question: ' + progressionWithSkip.join(' '))
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
