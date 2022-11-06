var userChoice = prompt("Rock, paper or scissor?");

var computerChoice = Math.random();

if(computerChoice < 0.34) {
    computerChoice = "rock";
}else if (computerChoice <= 0.67){
    computerChoice="paper"; 
}else{
    computerChoice="scissor";
}

var compare = function(choice1, choice2){

    if (choice1 === choice2){

        return "It's a tie!" + " " + "Let's play another one."
    }
    else if (choice1 === "rock") {
        
        if (choice2 === "scissors") {
            return "rock wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "paper wins" + "<br>" + "Your really smart computer beat you.";
        }

       
    }

    else if (choice1 === "paper") {
        
        if (choice2 === "rock") {
            return "paper wins" + "<br>" + "You beat the computer, nice job!";
        }
        else {
            return "scissors wins" + "<br>" + "Your really smart computer beat you.";
        }
            
    }
    
    else if (choice1 === "scissors") {
        
        if (choice2 === "rock") {
            return "rock wins" + "<br>" + "Your really smart computer beat you.";
        }
        else {
            return "scissors win" + "<br>" + "You beat the computer, nice job!";
        }
    }
}

document.write("Computer chose: " + computerChoice + "<br>");
document.write(compare(userChoice,computerChoice));
