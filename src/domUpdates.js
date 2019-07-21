import $ from 'jquery';

export default {

appendPlayers(players) {
    players.forEach(player => {
      $(`.player-${player.id}-name`).text(player.name);
      $(`.player-${player.id}-score`).text(player.score);
      $(`.player-${player.id}-bank`).text(player.bank);
    })
},

updateCurrentPlayerName(player) {
    $('.current-player-name').text(player)
  },

updatePlayerScores(players) {
    players.forEach(player => {
      $(`.player-${player.id}-score`).text(player.score);
      $(`.player-${player.id}-bank`).text(player.bank);
    })
  },

appendPuzzle(puzzle) {
    let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer)
    $('.puzzle-input-area').html(`${puzzleAnswer}`);
    $('.puzzle-character').hide();
    $('.symbol').show();
    $('.category').text(puzzle.category);
    $('.hint').text(puzzle.hint);
  },

createPuzzle(answer) {
    let list = `<div class="current-puzzle">`
    let currentPuzzle = answer.forEach(letter => {
      if (letter === '&' || letter === '-' || letter === '\'') {
        list += `<p class="puzzle-container"><span class="puzzle-character symbol">${letter}</span></p>`; 
      } else if (letter === ' ') {
        list += `<p class="puzzle-container space"><span class="puzzle-character">${letter}</span></p>`;
      } else {
        list += `<p class="puzzle-container"><span class="puzzle-character" id="${letter}">${letter}</span></p>`; 
      } 
    })
    list += "</div>";
    return list;
  },

updateCurrentPlayerScore(player) {
  $(`.player-${player.id}-score`).text(player.score);
},

appendLetter(guess) {
  $(`#${guess}`).show();
}, 

disableSpinBtn() {
  $('.spin-btn').attr("disabled", true);
},

enableSpinBtn() {
  $('.spin-btn').attr("disabled", false);
},

disableConsonants() {
  $('.letter').attr("disabled", true);
},

enableConsonants() {
  $('.letter').attr("disabled", false);
},

disableVowels() {
  $('.vowel').attr("disabled", true);
},

enableVowels() {
  $('.vowel').attr("disabled", false);
},

enableBuyVowel() {
  $('.buy-vowel-btn').attr("disabled", false)
},

enableBuyVowel() {
  $('.buy-vowel-btn').attr("disabled", false)
},

}