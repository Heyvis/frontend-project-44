import readLineSync from 'readline-sync';

export const roundsNumber = 3;

const runGameLogic = (rounds, description) => {
    console.log('Welcome to the Brain Games!');
    const name = readLineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log(description);
    for (let i = 0; i < roundsNumber; i += 1) {
        const [question, answer] = rounds[i];
        console.log(`Question: ${question}`);
        const userAnswer = readLineSync.question('Your answer: ');
        if (userAnswer === answer) {
            console.log('Correct!');
        }else {
            console.log(`${userAnswer} was the wrong answer. Right answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export default runGameLogic;