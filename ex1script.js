// let age = prompt("Tell me your age");

// alert("Your age is " +  age);

// let a = 5;

// let b;

// b = (a-3)*(a+9);

// console.log(b);


let Berlin;
Berlin = prompt("Is Berlin in Italy? - Y/N");
if (Berlin == "N"){
    alert("Correct! + ");
    Berlin = 1;
} else {
    alert("Incorrect!");
    Berlin = 0;
}

let Milan;
Milan = prompt("Is Milan in Switzerland? - Y/N");
if (Milan == "N"){
    alert("Correct! + ");
    Milan = 1;
} else {
    alert("Incorrect!");
    Milan = 0;
}

let Zurich;
Zurich = prompt("Is Zurich in Switzerland? - Y/N");
if (Zurich == "Y"){
    alert("Correct! + ");
    Zurich = 1;
} else {
    alert("Incorrect!");
    Zurich = 0;
}

let NewYork = prompt("Is New York in the USA? - Y/N");
if (NewYork == "Y"){
    alert("Correct! + ");
    NewYork = 1;
} else {
    alert("Incorrect!");
    NewYork = 0;
}

let Riga = prompt("Is Riga in Latvia? - Y/N");
if (Riga == "Y"){
    alert("Correct! + ");
    Riga = 1;
} else {
    alert("Incorrect!");
    Riga = 0;
}

finalScore = Berlin + Milan + Zurich + NewYork + Riga;

alert("Final score: " + finalScore +"/5");










