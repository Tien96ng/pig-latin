$(document).ready(function() {
  
  // Initialize Array for Vowels.
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  // Initialize Array for Consonants.
  let consonants = [
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 
    'X', 'Z', 'Y'];

  // Form Submission event handler to read and display/do something with it.
  $("#pig-form").submit(function(event) {
    event.preventDefault();
    
    // Grab the input value.
    let input = $('#word').val();
    // Make the input value into an array, seperating each word by the spaces.
    // Example: "Hello World" ---> ["Hello", "World"];
    let inputArr = input.split(" ");
  
    // Function to take in an array and translate it to Pig Latin.
    function pigLatin(array) {
      // Boolean variable to determine if a letter is a consonant.
      let isCons = true;
      
      // Loop through the array.
      for(let i = 0; i < array.length; i++) {
        // Initialize a local variable to store the firstLetter of each Word in the array, as a shorthand.
        let firstLetter = array[i].charAt(0);
        
        // If Statement that is TRUE when the first letter of the current word in the array is in the Vowels array.
        if(vowels.indexOf(firstLetter.toUpperCase()) !== -1) {
          // Change the current word in the array if it starts with a vowel to be within the specs of the problem:
          // For words beginning with a vowel, add "way" to the end.
          array[i] = array[i] + "way";
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

    









