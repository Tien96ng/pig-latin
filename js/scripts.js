$(document).ready(function() {

  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let consonants = [
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 
    'X', 'Z', 'Y'];

  $("#pig-form").submit(function(event) {
    event.preventDefault();
    
    let input = $('#word').val();
    let inputArr = input.split(" ");
  
    function pigLatin(array) {
      let isCons = true;
      

      for(let i = 0; i < array.length; i++) {
        let firstLetter = array[i].charAt(0);
        
        if(vowels.indexOf(firstLetter.toUpperCase()) !== -1) {
          array[i] = array[i] + "ay";
        } else if (consonants.indexOf(firstLetter.toUpperCase()) !== -1) {

          let wordArr = array[i].split("");
          let cons = "";
          let nonCons = "";

          wordArr.forEach(function(letter) {
            if(consonants.indexOf(letter.toUpperCase()) !== -1 && isCons) {
              cons += letter;
            } else {
              isCons = false;
              nonCons += letter;
            }
          });
          isCons = true;
          array[i] = nonCons + cons + "ay";
        }

      }
      return array;
    }
  
    let pigLatinVowel = pigLatin(inputArr).join(" ");
  
    $("#original").text(input);
    $("#pig").text(pigLatinVowel);
  })
    
  

  
  

  });

    









