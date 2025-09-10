import readlineSync from 'readline-sync'
const welcomeUser = () => {
  const name = readlineSync.question('Ваше имя: ')
  console.log('Hello, ' + name + '!')
}
export default welcomeUser
