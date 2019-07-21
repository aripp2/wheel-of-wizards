

//   spinWheelHandler() {
//     if (this.currentSpin === 'BANKRUPT') {
//       this.currentPlayer.score = 0;
//       // maybe have this method in round, and instanciate the next turn with only the next player??
//       this.getNextPlayer();
//     } else if (this.currentSpin === 'LOSE A TURN') {
//       this.getNextPlayer();
//     } else {
//       guess = domUpdates.chooseConsonant();
//     }
//   }

//   //   if(this.currentSpin === 'BANKRUPT'){
//   //     this.goBankrupt();
//         console.log(Game.Round)
//         round.makeNewTurn()
//   //   } if(this.currentSpin === 'LOSE-A-TURN'){
//   //     this.findCurrentPlayer()
//   //   } else {
//   //     //dom.guessExecution()
//   //     this.guessExecution()
//   //   }
//   }

//   // guessExecution(){
//   //   ALL DOM
//   //   enableConsButtons
//   //   querySelect letterGuessed
//   //   findIndex of all letters in the correctAnswer
//   //   reveal all letters
//   //   enable spin/buy/solve
//   //   disable letter buttons
//   //   let letterGuessed = letter guessed on the dom
//   //     if(this.puzzle.correctAnswer.includes(letterGuessed){
//   //      this.updateScore(letterGuessed)
//   // })
//   // }

//   buyVowel(chosenVowel) {
//     // from an array of vowels, splice vowel that is chosen
//     // take 100 out of the players bank account when vowel 
//     // is chosen
//     const vowels = ['A', 'E', 'I', 'O', 'U'];

//     if (vowels.includes(chosenVowel)) {
//       let foundIndex = vowels.findIndex((letter) => letter === chosenVowel);
//       vowels.splice(foundIndex, 1);
//       Player.score -= 100;
//       return vowels;
//     } else {
//       return 'Sorry Muggle! That vowel has disappeared!'
//     }

//   }

//   solvePuzzle(answerGiven) {
//     // should be able to guess if string of the guess is the
//     // same as the string input of the player
//     let puzzleAnswer = Object.values(data.puzzles)[0].puzzle_bank[0].correct_answer;
//     if (puzzleAnswer === answerGiven) {
//       Player.score += this.spinWheel(); 
//     }
//   }



//   goBankrupt() {
//     // if wheel lands on bankrupt, player account is back to 0
//     // move to next player
//       this.currentPlayer.score = 0;
//       this.findCurrentPlayer();

//   }
 
//   looseTurn() {
//     // if player chooses wrong letter or vowel
//     // move to next player 
//     this.findCurrentPlayer();
//   }

//   compareGuessAgainstSolution() {
//     // should check if the input of the players guess
//     // matches what the correct answer is
//   }

