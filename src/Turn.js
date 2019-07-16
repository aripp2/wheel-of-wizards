import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Turn {
  constructor(round, player) {
    this.round = round;
    this.player = player;
    this.currentSpin;
    this.score = 0;
    this.spunWheel = false;
  }

  spinWheel() {
    //call wheel spinWheel 
    //Assign to current spin
    let value = Math.round(Math.random() * 21);
    this.currentSpin = data.wheel[value];
  }

  buyVowel(chosenVowel) {
    // from an array of vowels, splice vowel that is chosen
    // take 100 out of the players bank account when vowel 
    // is chosen
    const vowels = ['A', 'E', 'I', 'O', 'U'];

    if (vowels.includes(chosenVowel)) {
      let foundIndex = vowels.findIndex((letter) => letter === chosenVowel);
      vowels.splice(foundIndex, 1);
      Player.score -= 100;
      return vowels;
    } else {
      return 'Sorry Muggle! That vowel has disappeared!'
    }

  }

  solvePuzzle(answerGiven) {
    // should be able to guess if string of the guess is the
    // same as the string input of the player
    let puzzleAnswer = Object.values(data.puzzles)[0].puzzle_bank[0].correct_answer;
    if (puzzleAnswer === answerGiven) {
      Player.score += this.spinWheel(); 
    }
  }

  updateScore(letter) {
    let puzzleAnswer = Object.values(data.puzzles)[0].puzzle_bank[0].correct_answer;
    let splitAnswer = puzzleAnswer.split('');

    if (splitAnswer.includes(letter)) {
      Player.score += this.spinWheel(); 
    } else {
      // next player
    }
    // if letter guessed is correct, add amount of money
    // that the wheel outputed into bank
  }

  goBankrupt() {
    // if wheel lands on bankrupt, player account is back to 0
    // move to next player
    if (this.spinWheel === 'Bankrupt') {
      Player.score = 0;
    }
  }

  looseTurn() {
    // if player chooses wrong letter or vowel
    // move to next player 

  }

  compareGuessAgainstSolution() {
    // should check if the input of the players guess
    // matches what the correct answer is
  }

  getNextPlayer() {
    // move to next player in the array 
  }
}

export default Turn;