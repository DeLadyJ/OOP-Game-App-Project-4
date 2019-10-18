/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 * 
 * Jane Lewis*/

class Phrase {
    constructor(phrase){
    }
        addPhraseToDisplay(){ 
    
    //Get phrase then displays on screen
        let array = this.phrase.split('')
        let str = ''
        //console.log(array);

      //check for letter or space and adds a letter or space class
        array.forEach(function(letter) {
          if (letter === " ") {
            str += '<li class="space"> </li>'
          } else {
            str += `<li class="hide letter ${letter}">${letter}</li>`
          }
      //console.log(str);
        })

        $('#phrase ul').append(str);
      }
  
        checkLetter(){
     // Checks to see if the letter selected by the player matches a letterin the phrase.
        return this.phrase.includes(letter);
        };

        showMatchedLetter(){
          let li = document.getElementsByClassName(letter);
          for (let i = 0; i < li.length; i++) {
            li[i].className = `show letter ${letter}`;
            $('li').className += ' show';
            $('li').className -= ' hide';
          }
        };  
    
};
