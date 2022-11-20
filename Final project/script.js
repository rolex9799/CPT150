const playerText = document.querySelector(".playerScore");

const computerText = document.querySelector(".computerScore");

const resultText = document.querySelector(".result");

const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
        computer = "Ironman";
        break;
        case 2:
        computer = "Batman";
        break;
        case 3:
        computer = "Superman";
        break;
    }
    }

function checkWinner(){
    if (computer == player){
        return "Draw!"
    }
    else if (computer == "Ironman"){
        return (player == "Superman")? "You Win!" : "You Lose!"
    }
    else if (computer == "Superman"){
        return (player == "Batman")? "You Win!" : "You Lose!"
    }
    else if (computer == "Batman"){
        return (player == "Ironman")? "You Win!" : "You Lose!"
    }
}