
let randomNr = Math.ceil(Math.random() * 100);
let guess;

do {
    for(let i = 0; i < 5; i++){
        guess = prompt("Please gues the number between 1-100! ");
        if (guess > randomNr){
            alert("Your guess is too high!");
        } else if (guess < randomNr){
            alert("Your guess is too low!");
        }

    }

}while (guess == randomNr);

if (guess == randomNr){
    alert("You won!");
}else{
    alert("You lost!");
}









