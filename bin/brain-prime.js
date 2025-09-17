#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcomeUser from '../src/cli.js'
console.log('Welcome to the Brain Games!')
const name = welcomeUser()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

let i = 0
while (i < 3) {
  const randomInt = Math.floor(Math.random() * 100) // генератор чисел
  console.log('Question:' + randomInt)
  const usersAnswer = readlineSync.question('Your answer: ')
  let rightAnswer
  function isPrimeSimple(n) { // функция проверки на простоту числа
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false
    }

    return true
  }
  if (isPrimeSimple(randomInt)) {
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
    console.log(usersAnswer + ' is wrong answer ;(. Correct answer was "' + rightAnswer + '".' + '\n' + 'Let\'s try again, ' + name)

    i = 0
  }
}

console.log('Congratulations, ' + name)
