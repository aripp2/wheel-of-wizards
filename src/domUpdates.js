import $ from 'jquery';

export default {

appendPlayers(players) {
  players.forEach(player => {
    $(`.player${player.id}Name`).text(player.name);
    $(`.player${player.id}Score`).text(player.score);
    $(`.player${player.id}Bank`).text(player.bank);
  })
},

updateCurrentPlayerName(player) {
  $('.current-player-name').text(player)
},

updatePlayerScores(players) {
  players.forEach(player => {
    $(`.player${player.id}Score`).text(player.score);
    $(`.player${player.id}Bank`).text(player.bank);
  })
},

appendPuzzle(puzzle) {
  let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer)
  $('.puzzleInputArea').html(`${puzzleAnswer}`);
  $('.puzzleCharacter').hide();
  $('.symbol').show();
  $('.category').text(puzzle.category);
  $('.hint').text(puzzle.hint);
},

createPuzzle(answer) {
  let list = `<div class="currentPuzzle">`
  let currentPuzzle = answer.forEach(letter => {
    if (letter === '&' || letter === '-' || letter === '\'') {
      list += `<p class="puzzleContainer"><span class="puzzleCharacter symbol">${letter}</span></p>`; 
    } else if (letter === ' ') {
      list += `<p class="puzzleContainer space"><span class="puzzleCharacter">${letter}</span></p>`;
    } else {
      list += `<p class="puzzleContainer"><span class="puzzleCharacter ${letter}">${letter}</span></p>`; 
    } 
  })
  list += "</div>";
  return list;
},

// checkGuess(guess, answer) {
//   if (answer.includes(guess)) {
//     $('.').
//   }
// },



// chooseConsonant() {
//   $('.consonants').click((event)=> {
//   let clickedLetter = $('')
//   })
// }
}