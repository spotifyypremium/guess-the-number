let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function newGame(){

    window.location.reload();
}

function init(){

    computerNumber = Math.floor(Math.random() *100 + 1);
    // console.log(computerNumber);
}

function compareNumbers(){

    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(userNumber);
    document.getElementById('guesses').innerHTML = userNumbers.join('-')

    if(attempts < maxGuesses){

        if(userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is higher than the correct one';
            document.getElementById('inputBox').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts;
        }

        else if(userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Your number is lower than the correct one';
            document.getElementById('inputBox').value = '';
            attempts++
            document.getElementById('attempts').innerHTML = attempts;
        } 

        else {

            document.getElementById('textOutput').innerHTML = 'You guessed the correct number!';
            attempts++
            document.getElementById('inputBox').setAttribute('Readonly','Readonly');
        }
    }

    else{
        document.getElementById('textOutput').innerHTML = 'Limit of attempts reached, you lost! The correct number was '+computerNumber;
    }
}