import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';
import bonusRound from './BonusRound.js'
import domUpdates from './domUpdates';
import { isNumber } from 'util';

class BonusRound extends Round {
    constructor (puzzles, wheel, players, champion){
        super(puzzles, wheel, players)
        this.champion = champion;
        this.players = players;
        this.puzzles = puzzles;
        this.puzzle = this.assignPuzzle()
        this.wheel = this.assignWheel(wheel);
        this.currentSpin = null;
        console.log(this.puzzle.correctAnswer.join(''))
    }

    assignPuzzle() {
        this.makePuzzleBank();
        let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
        return new Puzzle(this.puzzleBank[randomNumber]);
    }

    makePuzzleBank() {
        let oneWordPuzzles = this.puzzles.one_word_answers.puzzle_bank;
        let twoWordPuzzles = this.puzzles.two_word_answers.puzzle_bank;
        let threeWordPuzzles = this.puzzles.three_word_answers.puzzle_bank;
        let fourWordPuzzles = this.puzzles.four_word_answers.puzzle_bank;
        let allPuzzles = oneWordPuzzles.concat(...twoWordPuzzles, ...threeWordPuzzles, ...fourWordPuzzles);
        return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle))
    }

    appendPuzzle(){
        domUpdates.appendBonusPuzzle(this.puzzle)
    }

    assignWheel(wheel){
        let newWheel = [];
        wheel.forEach(number => {
            if (typeof number === 'string'){
                return
            } else {
                let newNumber = number*10;
                newWheel.push(newNumber)
            }
        })
        return newWheel;
    }

    spinWheel() {
        let wheelIndex = Math.round(Math.random() * this.wheel.length);
        this.currentSpin = this.wheel[wheelIndex];
        return this.currentSpin;
    }

    guessOptions(){
        console.log('guesssss')
    }
}


export default BonusRound;