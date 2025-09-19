export function getRule() {
  return 'What number is missing in the progression?'
}
export function progressionGame() {
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

  return { question: progressionWithSkip.join(' '), rightAnswer }
}
