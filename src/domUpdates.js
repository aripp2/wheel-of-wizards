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
    console.log(puzzle.correctAnswer.join(''))
},


displayChampion(champion) {
    let displayChamp = `<p>${champion.name} is the Winner! Click to enter the Bonus Round!</p>
    <button class="bonus-round-button">Start Bonus Round</button>
    <p>Spin for great Prizes!</p>`
    $('.champion').html(`${displayChamp}`)
},

appendBonusPuzzle(puzzle){
    let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer);
    $('.puzzle-input-area').html(`${puzzleAnswer}`);
    $('.puzzle-character').hide();
    $('.symbol').show();
    $('.category').text(puzzle.category);
    $('.hint').text(puzzle.hint);
    let letters = ['R', 'S', 'T', 'L', 'N', 'C'];
    console.log(puzzle.correctAnswer.join(''))
    puzzle.correctAnswer.forEach(letter => {
      if (letters.includes(letter)){
        $(`.${letter}`).show();
      }
    })
},

createPuzzle(answer) {
    let list = `<div class="current-puzzle">`
    let currentPuzzle = answer.forEach(letter => {
      if (letter === '&' || letter === '-' || letter === '\'') {
        list += `<p class="puzzle-container"><span class="puzzle-character symbol">${letter}</span></p>`; 
      } else if (letter === ' ') {
        list += `<p class="puzzle-container space"><span class="puzzle-character">${letter}</span></p>`;
      } else {
        list += `<p class="puzzle-container"><span class="puzzle-character ${letter}" id="${letter}">${letter}</span></p>`; 
      } 
    })
    list += "</div>";
    return list;
  },

updateCurrentPlayerScore(player) {
  $(`.player-${player.id}-score`).text(player.score);
},

updateCurrentPlayerBank(player) {
  $(`.player-${player.id}-score`).text(player.bank);
},

appendLetter(guess) {
  $(`.${guess}`).show();
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

disableUsedConsonants(lettersUsed) {
  lettersUsed.forEach(letter => {
  $(`#cons${letter}`).attr("disabled", true);
  });
},

disableUsedVowels(lettersUsed) {
  lettersUsed.forEach(letter => {
  $(`#vowel${letter}`).attr("disabled", true);
  });
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
  $('.buy-vowel-btn').attr("disabled", false);
},

disableBuyVowel() {
  $('.buy-vowel-btn').attr("disabled", true);
},

notEnoughMoney() {
  alert('Sorry Muggle! You are too poor!');
}



}