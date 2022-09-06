let number = prompt("Please enter a number between 2 and 169!");

let primeNumber = true;

if (number == 1){
    alert("The number is less than 2!");
} else if (number > 1){

    for (let i = 2; i < number; i++){

        if (number % i == 0){
            primeNumber = false;
        }
    }
    if (primeNumber){
    
        alert(number + " is a prime number");
    
    }else{
        alert(number + " is not a prime number");
    }
    
}else {
    alert("This is not a prime number");
}




