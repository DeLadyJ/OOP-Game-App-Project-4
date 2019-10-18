/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.misses = 0;
        
        this.phrases = [
          new phrase("when they go low we go high"),
          new phrase("i wish my wallet came with refills"),
          new phrase("three little birds"),
          new phrase("those who do not listen shall feel"),
          new phrase("")
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
          document.getElementById('overlay').style.display = 'none';

            /**gets a random phrase then displays the phrase on the screen*/
          this.activePhrase = this.getRandomPhrase();
          this.activePhrase.addPhraseToDisplay();
          new Phrase(phrase);
          }

          handleInteraction (){

            phrase.showMatchedLetter(key); //{
              if (this.checkForWin( ) === 'win') {
                this.gameOver('win');
              } else {
                if (phrase.checkLetter(key.innerText) === 'lose') {
                this.removeLife();
                if (this.missed === 5) {
                  this.gameOver('lose');
                }
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
            //this method displays the original start screen overlay
            const overlay = document.getElementById('overlay');
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
 }
