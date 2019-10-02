/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
        this.misses = 0;
        this.activePhrase = null;
        this.phrases = [
          new phrase("when they go low we go high"),
          new phrase("i wish my wallet came with refills"),
          new phrase("three little birds"),
          new phrase("those who do not listen shall feel"),
          new phrase("")
        ];
       }
       /**
    * Gets random phrase from phrases, then returns the randow phrase
    */
       getRandomPhrase(){
         this.currentPhrase = this.phrase[Math.floor(Math.random() * phrases.length)];
           return randomPhrase;
         }
         startGame(){
          //hide the element with the id of overlay
          document.getElementById('overlay').style.display = 'none';
          }
 }
