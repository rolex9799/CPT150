let guess;
let random = Math.ceil(Math.random() * 20);
let rounds;

function guessNumber(){

    do{
        rounds = prompt("Please enter the number of rounds! ");
        for(let i = 0; i < rounds; i++){
            guess = prompt("Please guess the number between 1-20!");
            if (guess > random){
                alert("Your guess is too high!");
            } else if (guess < random){
                alert("Your guess is too low!");
            }
    
        }

    }while (guess == random);

    if (guess == random){
    alert("You won!");
    }else{
    alert("You lost!");
    }

    alert("The number was " + random);
    console.log(random);

}

guessNumber();

