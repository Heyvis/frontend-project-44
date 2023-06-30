import readLineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
};

export default sayGreetings;
