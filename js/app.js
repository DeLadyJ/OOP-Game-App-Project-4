/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//const qwerty = document.querySelector('#qwerty');

 let game;
 document.querySelector('#btn__reset').addEventListener('click', function() {
    game = new Game ();
    game.startGame();
 });
 //.addEventListener('click', function() {
 //document.querySelector('#startGame').addEventListener('click', function() {
  


    
    // document.querySelector('#qwerty').addEventListener('click', e => {    // When any letter is clicked, handleInteractions will be called
    //    if(e.target.className === 'key') {
    //        game.handleInteraction(e.target);
    //    }
    // })