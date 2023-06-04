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
console.log(`The original word is "${word}"`);
console.log(`The jumbled word is "${jumbledWord}"`);
const guess = prompt(`Unscramble the word: "${jumbledWord}"`);
console.log(`The user guessed "${guess}"`);

// Check the user's guess against the original word
if (guess.toLowerCase() === word) {
  alert(`Congratulations, you guessed the word "${word}"!`);
} else {
  alert(`Sorry, the word was "${word}". Try again!`);
}