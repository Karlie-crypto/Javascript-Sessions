const readline = require('readline');

// Define an array of words to use in the puzzle
const words = ['banana', 'apple', 'orange', 'pear', 'grape'];

// Select a random word from the array
const word = words[Math.floor(Math.random() * words.length)];

// Shuffle the letters of the word using the Fisher-Yates shuffle algorithm
function shuffleWord(word) {
  let shuffledWord = '';
  let letters = word.split('');
  while (letters.length > 0) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    shuffledWord += letters[randomIndex];
    letters.splice(randomIndex, 1);
  }
  return shuffledWord;
}

// Present the jumbled word to the user and ask them to guess
const jumbledWord = shuffleWord(word);
//console.log(`The original word is "${word}"`);
console.log(`The jumbled word is "${jumbledWord}"`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Unscramble the word: "${jumbledWord}"\n`, (guess) => {
  console.log(`The user guessed "${guess}"`);

  // Check the user's guess against the original word
  if (guess.toLowerCase() === word) {
    console.log(`Congratulations, you guessed the word "${word}"!`);
  } else {
    console.log(`Sorry, the word was "${word}". Try again!`);
  }

  rl.close();
});