import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Turn {
  constructor(players, puzzle) {
    this.wheel = data.wheel;
    // this.round = round;
    this.puzzle = puzzle; 
    this.players = players;
    this.currentPlayer = this.findCurrentPlayer();
    this.currentSpin = null;
    this.spunWheel = false;
  }

  spinWheel() {
    this.currentSpin = Math.round(Math.random() * this.wheel.length);
    this.spinWheelHandler()
    return this.wheel[this.currentSpin];
  }

  spinWheelHandler() {
  //   if(this.currentSpin === 'BANKRUPT'){
  //     this.goBankrupt();
        console.log(Game.Round)
        round.makeNewTurn()
  //   } if(this.currentSpin === 'LOSE-A-TURN'){
  //     this.findCurrentPlayer()
  //   } else {
  //     //dom.guessExecution()
  //     this.guessExecution()
  //   }
  }

  // guessExecution(){
  //   ALL DOM
  //   enableConsButtons
  //   querySelect letterGuessed
  //   findIndex of all letters in the correctAnswer
  //   reveal all letters
  //   enable spin/buy/solve
  //   disable letter buttons
  //   let letterGuessed = letter guessed on the dom
  //     if(this.puzzle.correctAnswer.includes(letterGuessed){
  //      this.updateScore(letterGuessed)
  // })
  // }

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

    this.currentPlayer.score
  }

  goBankrupt() {
    // if wheel lands on bankrupt, player account is back to 0
    // move to next player
      this.currentPlayer.score = 0;
      this.findCurrentPlayer();

  }
 
  looseTurn() {
    // if player chooses wrong letter or vowel
    // move to next player 
    this.findCurrentPlayer();
  }

  compareGuessAgainstSolution() {
    // should check if the input of the players guess
    // matches what the correct answer is
  }

  findCurrentPlayer() {
    if(this.currentPlayer === this.players[0]){
      return this.currentPlayer = this.players[1];
    } else if (this.currentPlayer === this.players[1]){
      return this.currentPlayer = this.players[2];
    } else {
      return this.currentPlayer = this.players[0]
    }
  }
}
export default Turn;