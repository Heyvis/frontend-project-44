import { getRandomNumber } from "../utils.js";
import runGameLogic, { roundsNumber } from "../gameLogic.js";

const description = 'What number is missing in the progression?';
const progressoinLengh = 10;

const generateArray = () => {
    const step = getRandomNumber(1, 10);
    const resultProgression = [];
    const startNum = getRandomNumber(1, 100);
    for (let i = 0; i <= progressoinLengh; i += 1) {
        resultProgression.push(startNum + i * step);
    }
    return resultProgression;
};

const generateRound = () => {
    const resultProgression = generateArray();
    const hiddenIndex = getRandomNumber(0, progressoinLengh - 1);
    const correctAnswer = String(resultProgression[hiddenIndex]);
    resultProgression[hiddenIndex] = '..';
    const question = resultProgression.join(' ');
    return [question, correctAnswer];
};

const runProgressionGames = () => {
    const rounds = [];
    for (let i = 0; i < roundsNumber; i += 1) {
        rounds[i] = generateRound();
    }
    return runGameLogic(rounds, description);
};

export default runProgressionGames;