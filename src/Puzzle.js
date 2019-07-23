import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import Round from "./Round.js";
// import data from './data/sample-data';
import domUpdates from "./domUpdates";

class Puzzle {
  constructor(puzzleObj) {
    this.category = puzzleObj["category"];
    this.totalWords = puzzleObj["number_of_words"];
    this.totalLetters = puzzleObj["total_number_of_letters"];
    this.hint = puzzleObj["description"];
    this.correctAnswer = [...puzzleObj.correct_answer.toUpperCase()];
  }
}

export default Puzzle;
