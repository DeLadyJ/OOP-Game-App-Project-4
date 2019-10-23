/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const btn__reset = document.querySelector('#btn__reset');
const char = document.querySelectorAll('.key');
const spaces = document.querySelectorAll('.space');
 class Game {
     constructor(){
        this.missed = 0;
        
        this.phrases = [
          new Phrase("when they go low we go high"),
          new Phrase("i wish my wallet came with refills"),
          new Phrase("three little birds"),
          new Phrase("your soul is your light"),
          new Phrase("your voice can change the world")
        ];
        this.activePhrase = null;
       }
       /**
    * Gets random phrase from phrases, then returns the randow phrase
    */
       getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
         }

         startGame(){
          //hide the element with the id of overlay
          //document.getElementById('overlay').style.display = 'none';
          const overlay = document.getElementById('overlay')
          overlay.style.display = 'none';

            /**gets a random phrase then displays the phrase on the screen*/
          this.activePhrase = this.getRandomPhrase();
          this.activePhrase.addPhraseToDisplay();
          new Phrase(phrase);

          function btn__reset (){
            if (btn__reset == 'startGame') {
              btn__reset == 'reset button'
            } else {
              btn__reset == startGame
            }
          }
          }

          handleInteraction (button){
            //button.disable = true;
            if (this.activePhrase.checkLetter(button.innerText)) {
              button.classList.add('chosen');
              this.activePhrase.showMatchedLetter(button.innerText);
            if  (this.checkForWin()) {
              this.gameOver('win');
              }
            } else {
              this.removeLife();
              if (this.missed === 5) {
              this.gameOver('lose');
              }
            }
          }
      
          checkForWin(){
            /**This method checks to see if the player has revealed all of the letters in the active phrase.
            */
            const allLetters = document.getElementsByClassName('hide') ;
            //console.log(allLetters);
      
            if (allLetters.length === 0) {
              return true;
            } else {
              return false;
            }
      
          }
      
          removeLife(){   //removes a life from the scoreboard
            let lives = [];
             lives = document.querySelectorAll(`img`);
              //console.log(lives)
      
              lives[this.missed].src = `images/lostHeart.png`;
              this.missed += 1;
              //replacing one of the `liveHeart.png` images with a `lostHeart.png` image
              //and increments the `missed` property
              if (this.missed === 5){
                  this.gameOver();
              }
      
                }
      
            gameOver() {
             // const reset = document.querySelector('.btn');
              // document.querySelector('#btn__reset').style.display = 'none';
      
            //this method displays the original start screen overlay
            document.getElementById('overlay').style.display = 'show';
            const message = document.getElementById('game-over-message');
            overlay.style.display = '';
      
            //will display win or lose CSS class message depending on the outcome of the
            //game, replaces the overlay’s `start` CSS class
      
               if (this.checkForWin() === true) {
           
              overlay.className = 'win';
              message.innerText = 'You Win';
            } else {
              overlay.className = 'lose';
              message.innerText = 'You Lose';
            }
          //this.resetGame();
          }

          resetGame(){

            let li = [];
             li = document.querySelectorAll('.letter');
             let spaces = [];
            //  spaces = document.querySelectorAll('.space');
             li.forEach(l => l.parentNode.removeChild(l));
             // Remove phrase placeholders from gameboard
             spaces.forEach(space => space.parentNode.removeChild(space));
             // Remove spaces from gameboard
             let char = [];
             //char = document.querySelectorAll('.key');
             char.forEach(key => {       // Enable all keys
                 char.removeAttribute("disabled");
                 char.className = "key";
             });
            }


 }
