export function getRule() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".'
}
export function primeGame() {
  const randomInt = Math.floor(Math.random() * 100) // генератор чисел

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
  return { question: randomInt, rightAnswer }
}
